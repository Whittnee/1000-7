import { checkResponse } from "@/shared/api";
import { TUserLocation } from "@/shared/types/user";
import { API_URL } from "@/shared/config/env";

export const getLocation = async (): Promise<TUserLocation> => {
  const res = await fetch(`${API_URL}/get-location`);
  return checkResponse<TUserLocation>(res);
}