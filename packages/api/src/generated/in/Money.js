// @flow

// <<GraphQLObject('Money', 'TODO: self descriptive')>>
export default class Money {

  // <<GraphQLField('amount', 'TODO: self descriptive')>>
  getAmount = (): string => {
    return this.amount;
  };

  // TODO: enum (?)
  // @GraphQLField('currency', 'TODO: self descriptive')
  // getCurrency = (): string => {
  //   return this.name
  // }
}

///// GENERATED:

class GraphQLMoneyType extends GraphQLObjectType {

  // note: there is no constructor so you can easily initialize it with `new`

  getDescription = () => {
    return 'TODO: self descriptive'; // or null
  };

  getFieldNames = () => {
    return [
      'amount', // for introspection (?)
    ];
  };

  amount = (obj: Money, args: GraphQLArgumentNode): string => {
    return obj.getAmount(...args);
  };

  // for introspection again
  amount_type = () => {
    return new GraphQLString();
  };
}

// pseudo:
// function getResults(obj, selectedFields) {
//   selectedFields.forEach((type, args) => {
//     new `GraphQL${type}Type`())->selectedFieldName(obj, args)
//   })
// }
