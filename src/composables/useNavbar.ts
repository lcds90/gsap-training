import { ref } from "vue";

export const useNavbar = () => {
  const actualPath = ref("");

  const setPath = (path: string) => {
    actualPath.value = path;
  };

  return {
    actualPath,
    setPath,
  };
};
