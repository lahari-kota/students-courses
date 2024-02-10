import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import apiURL from "../services/services";
import request from "./../utils/request,js";

const getSingleCourse = async (payload) => {
  const url = `${apiURL.getSingleCourse}/${payload.courseId}`;
  return request(url);
};

function useGetSingleCourse() {
  const queryCLient = useQueryClient();
  return useMutation({
    mutationFn: getSingleCourse,
    onSuccess: () => {
      queryCLient.refetchQueries({
        queryKey: ["getSingleCourse"],
      });
    },
  });
}
export default useGetSingleCourse;
