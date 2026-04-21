"use server";
import axios from "@/utils/axios-config";

export const post = async (url: string, body: object) => axios.post(url, body);

export const get = async (url: string, params?: object) => axios.get(url, { params });
