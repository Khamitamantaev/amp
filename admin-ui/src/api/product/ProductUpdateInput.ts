import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  code?: string | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
