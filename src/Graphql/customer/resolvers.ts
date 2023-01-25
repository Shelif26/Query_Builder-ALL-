import CustomerService from "../../Service/serviceclass";

const customerResolver = {
  Query: {
    greet() {
      return CustomerService.greet();
    },
    getCustermerByID(parant: unknown, args: { id: number }, context: unknown) {
      return CustomerService.getCustermerByID(args.id);
    },
    getCustermerByUUId(parant: unknown, args: { UUId: string }, context: unknown) {
      return CustomerService.getCustermerByUUID(args.UUId);
    },
    getallcustomer() {
      return CustomerService.getallcustomer();
    },
  },
  Mutation: {
    createCustomer(
      _parent: unknown,
      args: {
        input: { UUID: string; Customername: string; age: number };
      },
      context: any
    ) {
      return CustomerService.createCustomer(args.input);
    },
    deleteCutomer(parent: unknown, args:{id: number},context:unknown){
      return CustomerService.DeleteCustomer(args.id)
    }
  },
};

export default customerResolver;
