import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { userApi } from "../../../api/userApi";

export const AppKey = {
  all: ["users"],
  lists: () => [...AppKey.all, "list"],
  list: (filter) => [...AppKey.lists(), filter],
  details: () => [...AppKey.all, "detail"],
  detail: (id) => [...AppKey.details(), id],
};

export const useUser = ({ params, options }) => {
  return useQuery({
    queryKey: AppKey.list(params),
    queryFn: () => userApi.getAll(params),
    ...options,
  });
};

const deleteUser = (ids) => {
  return userApi.delete(ids);
};

export const useDeleteUser = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
};

export const usePrefetchCompanies = (data, queryParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.link?.next) {
      const newQueryParams = { ...queryParams, page: queryParams.page + 1 };

      queryClient.prefetchQuery(AppKey.list(newQueryParams), () =>
        userApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
