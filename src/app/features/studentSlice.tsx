import { Student } from "../models/student.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://69fdb93130ad0a6fd1c15f0a.mockapi.io", }),
  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/crud",
    }),
  }),
});

export const { useGetStudentsQuery } = studentApi;
