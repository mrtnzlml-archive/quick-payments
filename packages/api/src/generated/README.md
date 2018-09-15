Note - this directory is actually not generated but this is the idea:

https://youtu.be/9czIsWUoQJY
https://youtu.be/G_zipR8Y8Ks

TL;DR: use codegen

> Don't write your schema - just indicate in your actual language what she schema should
eventually look like.

What you write:

```hhvm
<<GraphQLObject('User', 'A Facebook User')>>
class User {
  <<GraphQLField('name', 'User\'s name')>>
  public function getName(): string { return $this->name; }
}
```

What you get and execute:

```hhvm
class GraphQLUserType extends GraphQLObjectType {
  const NAME = 'User';
  const DESCRIPTION = 'User\'s name';
  public function getName(User $obj): string {
    return $obj->getName();
  }
  public function nameType(): GraphQLType ...
}
```

Basically, this idea is that generated GraphQL type should contain all the annotation and 
descriptions but no actual implementation. It should call the actual JS class from BE. This is a 
great way how to keep the generated layer as thin as possible.

JavaScript (TODO):

```js
const Flow = require('flow-parser');

console.error(
  JSON.stringify(
    Flow.parse(
      `
class DashboardScene {
  payments = () => {}
}

export default class AllAvailableScenes {
  dashboard = (): DashboardScene => {}
}
`,
      {
        esproposal_class_instance_fields: true,
        esproposal_optional_chaining: true,
      },
    ),
    null,
    2,
  ),
);
```
