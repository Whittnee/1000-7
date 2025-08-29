import { checkResponse } from "@/shared/api";
import { TCartResponse, TCartUpdate } from "@/shared/types/cart";
import { API_URL } from "@/shared/config/env";

export const getCart = async (userId: string): Promise<TCartResponse> => {
  const res = await fetch(`${API_URL}/cart/${userId}`);
  return checkResponse<TCartResponse>(res);
};

export const clearCart = async(userId: string): Promise<void> => {
  const res = await fetch(`${API_URL}/cart/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  });
  if(!res.ok) {
    const error = res.status !== 204 ? await res.json() : { error: "Unknown error" };
    throw new Error(error.message || "Failed to clear cart");
  }
}

export const addToCart = async (data: TCartUpdate & { size: string, color: string}): Promise<void> => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  if(!res.ok) {
    const error = res.status !== 204 ? await res.json() : { error: "Unknown error" };
    throw new Error(error.message || "Failed to add to cart");
  }
};

export const removeFromCart = async (data: TCartUpdate): Promise<void> => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  });
  if(!res.ok) {
    const error = res.status !== 204 ? await res.json() : { error: "Unknown error" };
    throw new Error(error.message || "Failed to remove from cart");
  }
};

export const updateItemCount = async(data: TCartUpdate & { quantity: number }): Promise<void> => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  })
  if(!res.ok) {
    const error = res.status !== 204 ? await res.json() : { error: "Unknown error" };
    throw new Error(error.message || "Failed to update item count");
  }
}