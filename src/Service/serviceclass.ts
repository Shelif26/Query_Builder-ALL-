import { DbConnection } from "../Resource/DataConnection";
import { Customer } from "../Entity/customer";

const cumtomerRepo = DbConnection.getRepository(Customer);

class CustomerService {
  public static greet() {
    return "<------------Add Your Customer ----------->";
  }

  public static async createCustomer(input: {
    UUID: string;
    Customername: string;
    age: number;
  }) {
    console.log("<------------------------->");
    const Customer = await cumtomerRepo.save(input);
    console.log(Customer);
    return "succesfully saved ";
  }

  public static async DeleteCustomer(id: number) {
    const delcustomer = await DbConnection.createQueryBuilder()
      .delete()
      .from(Customer)
      .where("customer.id = :customerid", { customerid: id })
      .execute();
    console.log(delcustomer);

    return "Customer Deleted Successfully";
  }

  public static async UpdateCustomer(){
    const UpdCustomer = await DbConnection
    .createQueryBuilder()
    .update(Customer)
    .set({ Customername: "", age: "" })
    .where("id = :id", { id: 1 })
    .execute()
  }

  public static async getCustermerByID(id: number) {
    console.log("------------------------------------------");
    const singlecustomer = await cumtomerRepo
      .createQueryBuilder("customer")
      .where("customer.id = :customerid", { customerid: id })
      .getOne();
    console.log(singlecustomer);
    return singlecustomer;
  }

  public static async getCustermerByUUID(UUId: string) {
    console.log("------------------------------------------");
    const customerUUID = await cumtomerRepo
      .createQueryBuilder("customer")
      .where("customer.UUId = :customerUUid", { customerUUid: UUId })
      .getOne();
    console.log(customerUUID);
    return customerUUID;
  }

  public static async getallcustomer() {
    const Allcustomer = await cumtomerRepo
      .createQueryBuilder("Customer")
      .getMany();
    return Allcustomer;
  }

  public static async getCustomerAgeAbove18() {}
}

export default CustomerService;
