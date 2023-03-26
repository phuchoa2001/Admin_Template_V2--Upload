import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { ImageApi } from "../../../api/imageApi";

export const ImageKey = {
  all: ["Image"],
  lists: () => [...ImageKey.all, "list"],
  list: (filter) => [...ImageKey.lists(), filter],
  details: () => [...ImageKey.all, "detail"],
  detail: (id) => [...ImageKey.details(), id],
};

export const useImages = ({ params, options }) => {
  return useQuery({
    queryKey: ImageKey.list(params),
    queryFn: () => ImageApi.getAll(params),
    ...options,
  });
};

const deleteImage = (ids) => {
  return ImageApi.delete(ids);
};

export const useDeleteImage = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteImage, {
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

      queryClient.prefetchQuery(ImageKey.list(newQueryParams), () =>
        ImageApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
