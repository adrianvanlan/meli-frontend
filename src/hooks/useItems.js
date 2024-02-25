import { fetchItems } from '../services/items';
import { useQuery } from '@tanstack/react-query';

export const useItems = (q) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['items', q],
    queryFn: () => fetchItems(q),
  });

  return {
    refetch,
    isLoading,
    isError,
    items: data?.items || [],
    categories: data?.categories || [],
  };
};
