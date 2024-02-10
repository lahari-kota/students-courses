import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import apiURL from "../services/services";
import request from "./../utils/request,js";

const getCourses = async (payload) => {
  const url = apiURL.getAllCourses;
  return request(url);
};

function useGetCourses() {
  const queryCLient = useQueryClient();
  return useMutation({
    mutationFn: getCourses,
    onSuccess: () => {
      queryCLient.refetchQueries({
        queryKey: ["getCourses"],
      });
    },
  });
}
export default useGetCourses;
