
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.customerId) {
    return {
      customerId: params.customerId
    };
  }
  
  throw error(404, 'Not found');
}