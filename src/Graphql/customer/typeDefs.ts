export const typedef = `

type Customer {
    id:Int
    UUId:String
    Customername:String
    age:Int
}

input customerInput {
    UUId:String!
    Customername:String!
    age:Int!
}

type Mutation{
    createCustomer(input: customerInput) : String!
    deleteCutomer(id:Int): Int
    updateCustomer(input: customerInput):Int
}

type Query {
    greet : String!
    getallcustomer:[Customer]
    getCustermerByID(id:Int):Customer!
    getCustermerByUUId(UUId:String):Customer!
}

`;
