
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model PhysicalBook
 * 
 */
export type PhysicalBook = $Result.DefaultSelection<Prisma.$PhysicalBookPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model BookAuthor
 * 
 */
export type BookAuthor = $Result.DefaultSelection<Prisma.$BookAuthorPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.physicalBook`: Exposes CRUD operations for the **PhysicalBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalBooks
    * const physicalBooks = await prisma.physicalBook.findMany()
    * ```
    */
  get physicalBook(): Prisma.PhysicalBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookAuthor`: Exposes CRUD operations for the **BookAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookAuthors
    * const bookAuthors = await prisma.bookAuthor.findMany()
    * ```
    */
  get bookAuthor(): Prisma.BookAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Book: 'Book',
    PhysicalBook: 'PhysicalBook',
    Author: 'Author',
    BookAuthor: 'BookAuthor',
    Loan: 'Loan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "physicalBook" | "author" | "bookAuthor" | "loan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      PhysicalBook: {
        payload: Prisma.$PhysicalBookPayload<ExtArgs>
        fields: Prisma.PhysicalBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          findFirst: {
            args: Prisma.PhysicalBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          findMany: {
            args: Prisma.PhysicalBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>[]
          }
          create: {
            args: Prisma.PhysicalBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          createMany: {
            args: Prisma.PhysicalBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhysicalBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>[]
          }
          delete: {
            args: Prisma.PhysicalBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          update: {
            args: Prisma.PhysicalBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhysicalBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>[]
          }
          upsert: {
            args: Prisma.PhysicalBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookPayload>
          }
          aggregate: {
            args: Prisma.PhysicalBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalBook>
          }
          groupBy: {
            args: Prisma.PhysicalBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalBookCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalBookCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      BookAuthor: {
        payload: Prisma.$BookAuthorPayload<ExtArgs>
        fields: Prisma.BookAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findFirst: {
            args: Prisma.BookAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findMany: {
            args: Prisma.BookAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          create: {
            args: Prisma.BookAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          createMany: {
            args: Prisma.BookAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          delete: {
            args: Prisma.BookAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          update: {
            args: Prisma.BookAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          deleteMany: {
            args: Prisma.BookAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          upsert: {
            args: Prisma.BookAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          aggregate: {
            args: Prisma.BookAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookAuthor>
          }
          groupBy: {
            args: Prisma.BookAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorCountAggregateOutputType> | number
          }
        }
      }
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    book?: BookOmit
    physicalBook?: PhysicalBookOmit
    author?: AuthorOmit
    bookAuthor?: BookAuthorOmit
    loan?: LoanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    loans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | UserCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    bookAuthors: number
    physicalBooks: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookAuthors?: boolean | BookCountOutputTypeCountBookAuthorsArgs
    physicalBooks?: boolean | BookCountOutputTypeCountPhysicalBooksArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountPhysicalBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalBookWhereInput
  }


  /**
   * Count Type PhysicalBookCountOutputType
   */

  export type PhysicalBookCountOutputType = {
    loans: number
  }

  export type PhysicalBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | PhysicalBookCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * PhysicalBookCountOutputType without action
   */
  export type PhysicalBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCountOutputType
     */
    select?: PhysicalBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhysicalBookCountOutputType without action
   */
  export type PhysicalBookCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    bookAuthors: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookAuthors?: boolean | AuthorCountOutputTypeCountBookAuthorsArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBookAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    address: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    address: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    loans?: boolean | User$loansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | User$loansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loans<T extends User$loansArgs<ExtArgs> = {}>(args?: Subset<T, User$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.loans
   */
  export type User$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    isbn: string | null
    title: string | null
    publicationDate: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    isbn: string | null
    title: string | null
    publicationDate: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    isbn: number
    title: number
    publicationDate: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    isbn?: true
    title?: true
    publicationDate?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    isbn?: true
    title?: true
    publicationDate?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    isbn?: true
    title?: true
    publicationDate?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    isbn: string
    title: string
    publicationDate: Date | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn?: boolean
    title?: boolean
    publicationDate?: boolean
    bookAuthors?: boolean | Book$bookAuthorsArgs<ExtArgs>
    physicalBooks?: boolean | Book$physicalBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn?: boolean
    title?: boolean
    publicationDate?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn?: boolean
    title?: boolean
    publicationDate?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    isbn?: boolean
    title?: boolean
    publicationDate?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isbn" | "title" | "publicationDate", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookAuthors?: boolean | Book$bookAuthorsArgs<ExtArgs>
    physicalBooks?: boolean | Book$physicalBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      bookAuthors: Prisma.$BookAuthorPayload<ExtArgs>[]
      physicalBooks: Prisma.$PhysicalBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isbn: string
      title: string
      publicationDate: Date | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookAuthors<T extends Book$bookAuthorsArgs<ExtArgs> = {}>(args?: Subset<T, Book$bookAuthorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    physicalBooks<T extends Book$physicalBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$physicalBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly isbn: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly publicationDate: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.bookAuthors
   */
  export type Book$bookAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Book.physicalBooks
   */
  export type Book$physicalBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    where?: PhysicalBookWhereInput
    orderBy?: PhysicalBookOrderByWithRelationInput | PhysicalBookOrderByWithRelationInput[]
    cursor?: PhysicalBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhysicalBookScalarFieldEnum | PhysicalBookScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model PhysicalBook
   */

  export type AggregatePhysicalBook = {
    _count: PhysicalBookCountAggregateOutputType | null
    _avg: PhysicalBookAvgAggregateOutputType | null
    _sum: PhysicalBookSumAggregateOutputType | null
    _min: PhysicalBookMinAggregateOutputType | null
    _max: PhysicalBookMaxAggregateOutputType | null
  }

  export type PhysicalBookAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type PhysicalBookSumAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type PhysicalBookMinAggregateOutputType = {
    id: number | null
    available: boolean | null
    bookId: number | null
  }

  export type PhysicalBookMaxAggregateOutputType = {
    id: number | null
    available: boolean | null
    bookId: number | null
  }

  export type PhysicalBookCountAggregateOutputType = {
    id: number
    available: number
    bookId: number
    _all: number
  }


  export type PhysicalBookAvgAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type PhysicalBookSumAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type PhysicalBookMinAggregateInputType = {
    id?: true
    available?: true
    bookId?: true
  }

  export type PhysicalBookMaxAggregateInputType = {
    id?: true
    available?: true
    bookId?: true
  }

  export type PhysicalBookCountAggregateInputType = {
    id?: true
    available?: true
    bookId?: true
    _all?: true
  }

  export type PhysicalBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalBook to aggregate.
     */
    where?: PhysicalBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBooks to fetch.
     */
    orderBy?: PhysicalBookOrderByWithRelationInput | PhysicalBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalBooks
    **/
    _count?: true | PhysicalBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalBookMaxAggregateInputType
  }

  export type GetPhysicalBookAggregateType<T extends PhysicalBookAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalBook[P]>
      : GetScalarType<T[P], AggregatePhysicalBook[P]>
  }




  export type PhysicalBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalBookWhereInput
    orderBy?: PhysicalBookOrderByWithAggregationInput | PhysicalBookOrderByWithAggregationInput[]
    by: PhysicalBookScalarFieldEnum[] | PhysicalBookScalarFieldEnum
    having?: PhysicalBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalBookCountAggregateInputType | true
    _avg?: PhysicalBookAvgAggregateInputType
    _sum?: PhysicalBookSumAggregateInputType
    _min?: PhysicalBookMinAggregateInputType
    _max?: PhysicalBookMaxAggregateInputType
  }

  export type PhysicalBookGroupByOutputType = {
    id: number
    available: boolean
    bookId: number
    _count: PhysicalBookCountAggregateOutputType | null
    _avg: PhysicalBookAvgAggregateOutputType | null
    _sum: PhysicalBookSumAggregateOutputType | null
    _min: PhysicalBookMinAggregateOutputType | null
    _max: PhysicalBookMaxAggregateOutputType | null
  }

  type GetPhysicalBookGroupByPayload<T extends PhysicalBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalBookGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalBookGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    available?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    loans?: boolean | PhysicalBook$loansArgs<ExtArgs>
    _count?: boolean | PhysicalBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBook"]>

  export type PhysicalBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    available?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBook"]>

  export type PhysicalBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    available?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBook"]>

  export type PhysicalBookSelectScalar = {
    id?: boolean
    available?: boolean
    bookId?: boolean
  }

  export type PhysicalBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "available" | "bookId", ExtArgs["result"]["physicalBook"]>
  export type PhysicalBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    loans?: boolean | PhysicalBook$loansArgs<ExtArgs>
    _count?: boolean | PhysicalBookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhysicalBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type PhysicalBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $PhysicalBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      available: boolean
      bookId: number
    }, ExtArgs["result"]["physicalBook"]>
    composites: {}
  }

  type PhysicalBookGetPayload<S extends boolean | null | undefined | PhysicalBookDefaultArgs> = $Result.GetResult<Prisma.$PhysicalBookPayload, S>

  type PhysicalBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhysicalBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhysicalBookCountAggregateInputType | true
    }

  export interface PhysicalBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalBook'], meta: { name: 'PhysicalBook' } }
    /**
     * Find zero or one PhysicalBook that matches the filter.
     * @param {PhysicalBookFindUniqueArgs} args - Arguments to find a PhysicalBook
     * @example
     * // Get one PhysicalBook
     * const physicalBook = await prisma.physicalBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalBookFindUniqueArgs>(args: SelectSubset<T, PhysicalBookFindUniqueArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhysicalBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhysicalBookFindUniqueOrThrowArgs} args - Arguments to find a PhysicalBook
     * @example
     * // Get one PhysicalBook
     * const physicalBook = await prisma.physicalBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalBookFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookFindFirstArgs} args - Arguments to find a PhysicalBook
     * @example
     * // Get one PhysicalBook
     * const physicalBook = await prisma.physicalBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalBookFindFirstArgs>(args?: SelectSubset<T, PhysicalBookFindFirstArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookFindFirstOrThrowArgs} args - Arguments to find a PhysicalBook
     * @example
     * // Get one PhysicalBook
     * const physicalBook = await prisma.physicalBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalBookFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhysicalBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalBooks
     * const physicalBooks = await prisma.physicalBook.findMany()
     * 
     * // Get first 10 PhysicalBooks
     * const physicalBooks = await prisma.physicalBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalBookWithIdOnly = await prisma.physicalBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalBookFindManyArgs>(args?: SelectSubset<T, PhysicalBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhysicalBook.
     * @param {PhysicalBookCreateArgs} args - Arguments to create a PhysicalBook.
     * @example
     * // Create one PhysicalBook
     * const PhysicalBook = await prisma.physicalBook.create({
     *   data: {
     *     // ... data to create a PhysicalBook
     *   }
     * })
     * 
     */
    create<T extends PhysicalBookCreateArgs>(args: SelectSubset<T, PhysicalBookCreateArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhysicalBooks.
     * @param {PhysicalBookCreateManyArgs} args - Arguments to create many PhysicalBooks.
     * @example
     * // Create many PhysicalBooks
     * const physicalBook = await prisma.physicalBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalBookCreateManyArgs>(args?: SelectSubset<T, PhysicalBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhysicalBooks and returns the data saved in the database.
     * @param {PhysicalBookCreateManyAndReturnArgs} args - Arguments to create many PhysicalBooks.
     * @example
     * // Create many PhysicalBooks
     * const physicalBook = await prisma.physicalBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhysicalBooks and only return the `id`
     * const physicalBookWithIdOnly = await prisma.physicalBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhysicalBookCreateManyAndReturnArgs>(args?: SelectSubset<T, PhysicalBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhysicalBook.
     * @param {PhysicalBookDeleteArgs} args - Arguments to delete one PhysicalBook.
     * @example
     * // Delete one PhysicalBook
     * const PhysicalBook = await prisma.physicalBook.delete({
     *   where: {
     *     // ... filter to delete one PhysicalBook
     *   }
     * })
     * 
     */
    delete<T extends PhysicalBookDeleteArgs>(args: SelectSubset<T, PhysicalBookDeleteArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhysicalBook.
     * @param {PhysicalBookUpdateArgs} args - Arguments to update one PhysicalBook.
     * @example
     * // Update one PhysicalBook
     * const physicalBook = await prisma.physicalBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalBookUpdateArgs>(args: SelectSubset<T, PhysicalBookUpdateArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhysicalBooks.
     * @param {PhysicalBookDeleteManyArgs} args - Arguments to filter PhysicalBooks to delete.
     * @example
     * // Delete a few PhysicalBooks
     * const { count } = await prisma.physicalBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalBookDeleteManyArgs>(args?: SelectSubset<T, PhysicalBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalBooks
     * const physicalBook = await prisma.physicalBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalBookUpdateManyArgs>(args: SelectSubset<T, PhysicalBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalBooks and returns the data updated in the database.
     * @param {PhysicalBookUpdateManyAndReturnArgs} args - Arguments to update many PhysicalBooks.
     * @example
     * // Update many PhysicalBooks
     * const physicalBook = await prisma.physicalBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhysicalBooks and only return the `id`
     * const physicalBookWithIdOnly = await prisma.physicalBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhysicalBookUpdateManyAndReturnArgs>(args: SelectSubset<T, PhysicalBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhysicalBook.
     * @param {PhysicalBookUpsertArgs} args - Arguments to update or create a PhysicalBook.
     * @example
     * // Update or create a PhysicalBook
     * const physicalBook = await prisma.physicalBook.upsert({
     *   create: {
     *     // ... data to create a PhysicalBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalBook we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalBookUpsertArgs>(args: SelectSubset<T, PhysicalBookUpsertArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhysicalBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCountArgs} args - Arguments to filter PhysicalBooks to count.
     * @example
     * // Count the number of PhysicalBooks
     * const count = await prisma.physicalBook.count({
     *   where: {
     *     // ... the filter for the PhysicalBooks we want to count
     *   }
     * })
    **/
    count<T extends PhysicalBookCountArgs>(
      args?: Subset<T, PhysicalBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhysicalBookAggregateArgs>(args: Subset<T, PhysicalBookAggregateArgs>): Prisma.PrismaPromise<GetPhysicalBookAggregateType<T>>

    /**
     * Group by PhysicalBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhysicalBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalBookGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhysicalBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalBook model
   */
  readonly fields: PhysicalBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loans<T extends PhysicalBook$loansArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalBook$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhysicalBook model
   */
  interface PhysicalBookFieldRefs {
    readonly id: FieldRef<"PhysicalBook", 'Int'>
    readonly available: FieldRef<"PhysicalBook", 'Boolean'>
    readonly bookId: FieldRef<"PhysicalBook", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalBook findUnique
   */
  export type PhysicalBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBook to fetch.
     */
    where: PhysicalBookWhereUniqueInput
  }

  /**
   * PhysicalBook findUniqueOrThrow
   */
  export type PhysicalBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBook to fetch.
     */
    where: PhysicalBookWhereUniqueInput
  }

  /**
   * PhysicalBook findFirst
   */
  export type PhysicalBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBook to fetch.
     */
    where?: PhysicalBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBooks to fetch.
     */
    orderBy?: PhysicalBookOrderByWithRelationInput | PhysicalBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalBooks.
     */
    cursor?: PhysicalBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalBooks.
     */
    distinct?: PhysicalBookScalarFieldEnum | PhysicalBookScalarFieldEnum[]
  }

  /**
   * PhysicalBook findFirstOrThrow
   */
  export type PhysicalBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBook to fetch.
     */
    where?: PhysicalBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBooks to fetch.
     */
    orderBy?: PhysicalBookOrderByWithRelationInput | PhysicalBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalBooks.
     */
    cursor?: PhysicalBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalBooks.
     */
    distinct?: PhysicalBookScalarFieldEnum | PhysicalBookScalarFieldEnum[]
  }

  /**
   * PhysicalBook findMany
   */
  export type PhysicalBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBooks to fetch.
     */
    where?: PhysicalBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBooks to fetch.
     */
    orderBy?: PhysicalBookOrderByWithRelationInput | PhysicalBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalBooks.
     */
    cursor?: PhysicalBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBooks.
     */
    skip?: number
    distinct?: PhysicalBookScalarFieldEnum | PhysicalBookScalarFieldEnum[]
  }

  /**
   * PhysicalBook create
   */
  export type PhysicalBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalBook.
     */
    data: XOR<PhysicalBookCreateInput, PhysicalBookUncheckedCreateInput>
  }

  /**
   * PhysicalBook createMany
   */
  export type PhysicalBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalBooks.
     */
    data: PhysicalBookCreateManyInput | PhysicalBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalBook createManyAndReturn
   */
  export type PhysicalBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * The data used to create many PhysicalBooks.
     */
    data: PhysicalBookCreateManyInput | PhysicalBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalBook update
   */
  export type PhysicalBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalBook.
     */
    data: XOR<PhysicalBookUpdateInput, PhysicalBookUncheckedUpdateInput>
    /**
     * Choose, which PhysicalBook to update.
     */
    where: PhysicalBookWhereUniqueInput
  }

  /**
   * PhysicalBook updateMany
   */
  export type PhysicalBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalBooks.
     */
    data: XOR<PhysicalBookUpdateManyMutationInput, PhysicalBookUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalBooks to update
     */
    where?: PhysicalBookWhereInput
    /**
     * Limit how many PhysicalBooks to update.
     */
    limit?: number
  }

  /**
   * PhysicalBook updateManyAndReturn
   */
  export type PhysicalBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * The data used to update PhysicalBooks.
     */
    data: XOR<PhysicalBookUpdateManyMutationInput, PhysicalBookUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalBooks to update
     */
    where?: PhysicalBookWhereInput
    /**
     * Limit how many PhysicalBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalBook upsert
   */
  export type PhysicalBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalBook to update in case it exists.
     */
    where: PhysicalBookWhereUniqueInput
    /**
     * In case the PhysicalBook found by the `where` argument doesn't exist, create a new PhysicalBook with this data.
     */
    create: XOR<PhysicalBookCreateInput, PhysicalBookUncheckedCreateInput>
    /**
     * In case the PhysicalBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalBookUpdateInput, PhysicalBookUncheckedUpdateInput>
  }

  /**
   * PhysicalBook delete
   */
  export type PhysicalBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
    /**
     * Filter which PhysicalBook to delete.
     */
    where: PhysicalBookWhereUniqueInput
  }

  /**
   * PhysicalBook deleteMany
   */
  export type PhysicalBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalBooks to delete
     */
    where?: PhysicalBookWhereInput
    /**
     * Limit how many PhysicalBooks to delete.
     */
    limit?: number
  }

  /**
   * PhysicalBook.loans
   */
  export type PhysicalBook$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * PhysicalBook without action
   */
  export type PhysicalBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBook
     */
    select?: PhysicalBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBook
     */
    omit?: PhysicalBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bookAuthors?: boolean | Author$bookAuthorsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookAuthors?: boolean | Author$bookAuthorsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      bookAuthors: Prisma.$BookAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookAuthors<T extends Author$bookAuthorsArgs<ExtArgs> = {}>(args?: Subset<T, Author$bookAuthorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly name: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.bookAuthors
   */
  export type Author$bookAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model BookAuthor
   */

  export type AggregateBookAuthor = {
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  export type BookAuthorAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    authorId: number | null
  }

  export type BookAuthorSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    authorId: number | null
  }

  export type BookAuthorMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    authorId: number | null
  }

  export type BookAuthorMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    authorId: number | null
  }

  export type BookAuthorCountAggregateOutputType = {
    id: number
    bookId: number
    authorId: number
    _all: number
  }


  export type BookAuthorAvgAggregateInputType = {
    id?: true
    bookId?: true
    authorId?: true
  }

  export type BookAuthorSumAggregateInputType = {
    id?: true
    bookId?: true
    authorId?: true
  }

  export type BookAuthorMinAggregateInputType = {
    id?: true
    bookId?: true
    authorId?: true
  }

  export type BookAuthorMaxAggregateInputType = {
    id?: true
    bookId?: true
    authorId?: true
  }

  export type BookAuthorCountAggregateInputType = {
    id?: true
    bookId?: true
    authorId?: true
    _all?: true
  }

  export type BookAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthor to aggregate.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookAuthors
    **/
    _count?: true | BookAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookAuthorMaxAggregateInputType
  }

  export type GetBookAuthorAggregateType<T extends BookAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookAuthor[P]>
      : GetScalarType<T[P], AggregateBookAuthor[P]>
  }




  export type BookAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithAggregationInput | BookAuthorOrderByWithAggregationInput[]
    by: BookAuthorScalarFieldEnum[] | BookAuthorScalarFieldEnum
    having?: BookAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookAuthorCountAggregateInputType | true
    _avg?: BookAuthorAvgAggregateInputType
    _sum?: BookAuthorSumAggregateInputType
    _min?: BookAuthorMinAggregateInputType
    _max?: BookAuthorMaxAggregateInputType
  }

  export type BookAuthorGroupByOutputType = {
    id: number
    bookId: number
    authorId: number
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  type GetBookAuthorGroupByPayload<T extends BookAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
        }
      >
    >


  export type BookAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectScalar = {
    id?: boolean
    bookId?: boolean
    authorId?: boolean
  }

  export type BookAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "authorId", ExtArgs["result"]["bookAuthor"]>
  export type BookAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $BookAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookAuthor"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      author: Prisma.$AuthorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      authorId: number
    }, ExtArgs["result"]["bookAuthor"]>
    composites: {}
  }

  type BookAuthorGetPayload<S extends boolean | null | undefined | BookAuthorDefaultArgs> = $Result.GetResult<Prisma.$BookAuthorPayload, S>

  type BookAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookAuthorCountAggregateInputType | true
    }

  export interface BookAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookAuthor'], meta: { name: 'BookAuthor' } }
    /**
     * Find zero or one BookAuthor that matches the filter.
     * @param {BookAuthorFindUniqueArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookAuthorFindUniqueArgs>(args: SelectSubset<T, BookAuthorFindUniqueArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookAuthorFindUniqueOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, BookAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookAuthorFindFirstArgs>(args?: SelectSubset<T, BookAuthorFindFirstArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, BookAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany()
     * 
     * // Get first 10 BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookAuthorFindManyArgs>(args?: SelectSubset<T, BookAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookAuthor.
     * @param {BookAuthorCreateArgs} args - Arguments to create a BookAuthor.
     * @example
     * // Create one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.create({
     *   data: {
     *     // ... data to create a BookAuthor
     *   }
     * })
     * 
     */
    create<T extends BookAuthorCreateArgs>(args: SelectSubset<T, BookAuthorCreateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookAuthors.
     * @param {BookAuthorCreateManyArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookAuthorCreateManyArgs>(args?: SelectSubset<T, BookAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookAuthors and returns the data saved in the database.
     * @param {BookAuthorCreateManyAndReturnArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookAuthors and only return the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, BookAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookAuthor.
     * @param {BookAuthorDeleteArgs} args - Arguments to delete one BookAuthor.
     * @example
     * // Delete one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.delete({
     *   where: {
     *     // ... filter to delete one BookAuthor
     *   }
     * })
     * 
     */
    delete<T extends BookAuthorDeleteArgs>(args: SelectSubset<T, BookAuthorDeleteArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookAuthor.
     * @param {BookAuthorUpdateArgs} args - Arguments to update one BookAuthor.
     * @example
     * // Update one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookAuthorUpdateArgs>(args: SelectSubset<T, BookAuthorUpdateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookAuthors.
     * @param {BookAuthorDeleteManyArgs} args - Arguments to filter BookAuthors to delete.
     * @example
     * // Delete a few BookAuthors
     * const { count } = await prisma.bookAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookAuthorDeleteManyArgs>(args?: SelectSubset<T, BookAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookAuthorUpdateManyArgs>(args: SelectSubset<T, BookAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors and returns the data updated in the database.
     * @param {BookAuthorUpdateManyAndReturnArgs} args - Arguments to update many BookAuthors.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookAuthors and only return the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, BookAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookAuthor.
     * @param {BookAuthorUpsertArgs} args - Arguments to update or create a BookAuthor.
     * @example
     * // Update or create a BookAuthor
     * const bookAuthor = await prisma.bookAuthor.upsert({
     *   create: {
     *     // ... data to create a BookAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BookAuthorUpsertArgs>(args: SelectSubset<T, BookAuthorUpsertArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorCountArgs} args - Arguments to filter BookAuthors to count.
     * @example
     * // Count the number of BookAuthors
     * const count = await prisma.bookAuthor.count({
     *   where: {
     *     // ... the filter for the BookAuthors we want to count
     *   }
     * })
    **/
    count<T extends BookAuthorCountArgs>(
      args?: Subset<T, BookAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAuthorAggregateArgs>(args: Subset<T, BookAuthorAggregateArgs>): Prisma.PrismaPromise<GetBookAuthorAggregateType<T>>

    /**
     * Group by BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BookAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookAuthor model
   */
  readonly fields: BookAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookAuthor model
   */
  interface BookAuthorFieldRefs {
    readonly id: FieldRef<"BookAuthor", 'Int'>
    readonly bookId: FieldRef<"BookAuthor", 'Int'>
    readonly authorId: FieldRef<"BookAuthor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookAuthor findUnique
   */
  export type BookAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findUniqueOrThrow
   */
  export type BookAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findFirst
   */
  export type BookAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findFirstOrThrow
   */
  export type BookAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findMany
   */
  export type BookAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthors to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor create
   */
  export type BookAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a BookAuthor.
     */
    data: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
  }

  /**
   * BookAuthor createMany
   */
  export type BookAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookAuthor createManyAndReturn
   */
  export type BookAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor update
   */
  export type BookAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a BookAuthor.
     */
    data: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
    /**
     * Choose, which BookAuthor to update.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor updateMany
   */
  export type BookAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
  }

  /**
   * BookAuthor updateManyAndReturn
   */
  export type BookAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor upsert
   */
  export type BookAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the BookAuthor to update in case it exists.
     */
    where: BookAuthorWhereUniqueInput
    /**
     * In case the BookAuthor found by the `where` argument doesn't exist, create a new BookAuthor with this data.
     */
    create: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
    /**
     * In case the BookAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
  }

  /**
   * BookAuthor delete
   */
  export type BookAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter which BookAuthor to delete.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor deleteMany
   */
  export type BookAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthors to delete
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to delete.
     */
    limit?: number
  }

  /**
   * BookAuthor without action
   */
  export type BookAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
  }


  /**
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    physicalBookId: number | null
  }

  export type LoanSumAggregateOutputType = {
    id: number | null
    userId: number | null
    physicalBookId: number | null
  }

  export type LoanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    physicalBookId: number | null
    loanDate: Date | null
    returnDate: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    physicalBookId: number | null
    loanDate: Date | null
    returnDate: Date | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    userId: number
    physicalBookId: number
    loanDate: number
    returnDate: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    id?: true
    userId?: true
    physicalBookId?: true
  }

  export type LoanSumAggregateInputType = {
    id?: true
    userId?: true
    physicalBookId?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    userId?: true
    physicalBookId?: true
    loanDate?: true
    returnDate?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    userId?: true
    physicalBookId?: true
    loanDate?: true
    returnDate?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    userId?: true
    physicalBookId?: true
    loanDate?: true
    returnDate?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: number
    userId: number
    physicalBookId: number
    loanDate: Date
    returnDate: Date | null
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    physicalBookId?: boolean
    loanDate?: boolean
    returnDate?: boolean
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    physicalBookId?: boolean
    loanDate?: boolean
    returnDate?: boolean
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    physicalBookId?: boolean
    loanDate?: boolean
    returnDate?: boolean
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectScalar = {
    id?: boolean
    userId?: boolean
    physicalBookId?: boolean
    loanDate?: boolean
    returnDate?: boolean
  }

  export type LoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "physicalBookId" | "loanDate" | "returnDate", ExtArgs["result"]["loan"]>
  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalBook?: boolean | PhysicalBookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      physicalBook: Prisma.$PhysicalBookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      physicalBookId: number
      loanDate: Date
      returnDate: Date | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {LoanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {LoanUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    physicalBook<T extends PhysicalBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalBookDefaultArgs<ExtArgs>>): Prisma__PhysicalBookClient<$Result.GetResult<Prisma.$PhysicalBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Loan model
   */
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'Int'>
    readonly userId: FieldRef<"Loan", 'Int'>
    readonly physicalBookId: FieldRef<"Loan", 'Int'>
    readonly loanDate: FieldRef<"Loan", 'DateTime'>
    readonly returnDate: FieldRef<"Loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loan createManyAndReturn
   */
  export type LoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
  }

  /**
   * Loan updateManyAndReturn
   */
  export type LoanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to delete.
     */
    limit?: number
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    isbn: 'isbn',
    title: 'title',
    publicationDate: 'publicationDate'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const PhysicalBookScalarFieldEnum: {
    id: 'id',
    available: 'available',
    bookId: 'bookId'
  };

  export type PhysicalBookScalarFieldEnum = (typeof PhysicalBookScalarFieldEnum)[keyof typeof PhysicalBookScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookAuthorScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    authorId: 'authorId'
  };

  export type BookAuthorScalarFieldEnum = (typeof BookAuthorScalarFieldEnum)[keyof typeof BookAuthorScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    physicalBookId: 'physicalBookId',
    loanDate: 'loanDate',
    returnDate: 'returnDate'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    loans?: LoanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    loans?: LoanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    loans?: LoanListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    isbn?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    publicationDate?: DateTimeNullableFilter<"Book"> | Date | string | null
    bookAuthors?: BookAuthorListRelationFilter
    physicalBooks?: PhysicalBookListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    bookAuthors?: BookAuthorOrderByRelationAggregateInput
    physicalBooks?: PhysicalBookOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    publicationDate?: DateTimeNullableFilter<"Book"> | Date | string | null
    bookAuthors?: BookAuthorListRelationFilter
    physicalBooks?: PhysicalBookListRelationFilter
  }, "id" | "isbn">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    isbn?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    publicationDate?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
  }

  export type PhysicalBookWhereInput = {
    AND?: PhysicalBookWhereInput | PhysicalBookWhereInput[]
    OR?: PhysicalBookWhereInput[]
    NOT?: PhysicalBookWhereInput | PhysicalBookWhereInput[]
    id?: IntFilter<"PhysicalBook"> | number
    available?: BoolFilter<"PhysicalBook"> | boolean
    bookId?: IntFilter<"PhysicalBook"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    loans?: LoanListRelationFilter
  }

  export type PhysicalBookOrderByWithRelationInput = {
    id?: SortOrder
    available?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
    loans?: LoanOrderByRelationAggregateInput
  }

  export type PhysicalBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhysicalBookWhereInput | PhysicalBookWhereInput[]
    OR?: PhysicalBookWhereInput[]
    NOT?: PhysicalBookWhereInput | PhysicalBookWhereInput[]
    available?: BoolFilter<"PhysicalBook"> | boolean
    bookId?: IntFilter<"PhysicalBook"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    loans?: LoanListRelationFilter
  }, "id">

  export type PhysicalBookOrderByWithAggregationInput = {
    id?: SortOrder
    available?: SortOrder
    bookId?: SortOrder
    _count?: PhysicalBookCountOrderByAggregateInput
    _avg?: PhysicalBookAvgOrderByAggregateInput
    _max?: PhysicalBookMaxOrderByAggregateInput
    _min?: PhysicalBookMinOrderByAggregateInput
    _sum?: PhysicalBookSumOrderByAggregateInput
  }

  export type PhysicalBookScalarWhereWithAggregatesInput = {
    AND?: PhysicalBookScalarWhereWithAggregatesInput | PhysicalBookScalarWhereWithAggregatesInput[]
    OR?: PhysicalBookScalarWhereWithAggregatesInput[]
    NOT?: PhysicalBookScalarWhereWithAggregatesInput | PhysicalBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhysicalBook"> | number
    available?: BoolWithAggregatesFilter<"PhysicalBook"> | boolean
    bookId?: IntWithAggregatesFilter<"PhysicalBook"> | number
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    bookAuthors?: BookAuthorListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bookAuthors?: BookAuthorOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    bookAuthors?: BookAuthorListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    name?: StringWithAggregatesFilter<"Author"> | string
  }

  export type BookAuthorWhereInput = {
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    id?: IntFilter<"BookAuthor"> | number
    bookId?: IntFilter<"BookAuthor"> | number
    authorId?: IntFilter<"BookAuthor"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }

  export type BookAuthorOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
    book?: BookOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
  }

  export type BookAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId_authorId?: BookAuthorBookIdAuthorIdCompoundUniqueInput
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    bookId?: IntFilter<"BookAuthor"> | number
    authorId?: IntFilter<"BookAuthor"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }, "id" | "bookId_authorId">

  export type BookAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
    _count?: BookAuthorCountOrderByAggregateInput
    _avg?: BookAuthorAvgOrderByAggregateInput
    _max?: BookAuthorMaxOrderByAggregateInput
    _min?: BookAuthorMinOrderByAggregateInput
    _sum?: BookAuthorSumOrderByAggregateInput
  }

  export type BookAuthorScalarWhereWithAggregatesInput = {
    AND?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    OR?: BookAuthorScalarWhereWithAggregatesInput[]
    NOT?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookAuthor"> | number
    bookId?: IntWithAggregatesFilter<"BookAuthor"> | number
    authorId?: IntWithAggregatesFilter<"BookAuthor"> | number
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: IntFilter<"Loan"> | number
    userId?: IntFilter<"Loan"> | number
    physicalBookId?: IntFilter<"Loan"> | number
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    physicalBook?: XOR<PhysicalBookScalarRelationFilter, PhysicalBookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
    loanDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    physicalBook?: PhysicalBookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    userId?: IntFilter<"Loan"> | number
    physicalBookId?: IntFilter<"Loan"> | number
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    physicalBook?: XOR<PhysicalBookScalarRelationFilter, PhysicalBookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
    loanDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    _count?: LoanCountOrderByAggregateInput
    _avg?: LoanAvgOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
    _sum?: LoanSumOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Loan"> | number
    userId?: IntWithAggregatesFilter<"Loan"> | number
    physicalBookId?: IntWithAggregatesFilter<"Loan"> | number
    loanDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    address?: string | null
    loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    address?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookCreateInput = {
    isbn: string
    title: string
    publicationDate?: Date | string | null
    bookAuthors?: BookAuthorCreateNestedManyWithoutBookInput
    physicalBooks?: PhysicalBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    isbn: string
    title: string
    publicationDate?: Date | string | null
    bookAuthors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    physicalBooks?: PhysicalBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAuthors?: BookAuthorUpdateManyWithoutBookNestedInput
    physicalBooks?: PhysicalBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAuthors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    physicalBooks?: PhysicalBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    isbn: string
    title: string
    publicationDate?: Date | string | null
  }

  export type BookUpdateManyMutationInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhysicalBookCreateInput = {
    available?: boolean
    book: BookCreateNestedOneWithoutPhysicalBooksInput
    loans?: LoanCreateNestedManyWithoutPhysicalBookInput
  }

  export type PhysicalBookUncheckedCreateInput = {
    id?: number
    available?: boolean
    bookId: number
    loans?: LoanUncheckedCreateNestedManyWithoutPhysicalBookInput
  }

  export type PhysicalBookUpdateInput = {
    available?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutPhysicalBooksNestedInput
    loans?: LoanUpdateManyWithoutPhysicalBookNestedInput
  }

  export type PhysicalBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
    loans?: LoanUncheckedUpdateManyWithoutPhysicalBookNestedInput
  }

  export type PhysicalBookCreateManyInput = {
    id?: number
    available?: boolean
    bookId: number
  }

  export type PhysicalBookUpdateManyMutationInput = {
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhysicalBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorCreateInput = {
    name: string
    bookAuthors?: BookAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    name: string
    bookAuthors?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bookAuthors?: BookAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bookAuthors?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    name: string
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookAuthorCreateInput = {
    book: BookCreateNestedOneWithoutBookAuthorsInput
    author: AuthorCreateNestedOneWithoutBookAuthorsInput
  }

  export type BookAuthorUncheckedCreateInput = {
    id?: number
    bookId: number
    authorId: number
  }

  export type BookAuthorUpdateInput = {
    book?: BookUpdateOneRequiredWithoutBookAuthorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorCreateManyInput = {
    id?: number
    bookId: number
    authorId: number
  }

  export type BookAuthorUpdateManyMutationInput = {

  }

  export type BookAuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type LoanCreateInput = {
    loanDate?: Date | string
    returnDate?: Date | string | null
    physicalBook: PhysicalBookCreateNestedOneWithoutLoansInput
    user: UserCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateInput = {
    id?: number
    userId: number
    physicalBookId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanUpdateInput = {
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalBook?: PhysicalBookUpdateOneRequiredWithoutLoansNestedInput
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    physicalBookId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanCreateManyInput = {
    id?: number
    userId: number
    physicalBookId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanUpdateManyMutationInput = {
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    physicalBookId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookAuthorListRelationFilter = {
    every?: BookAuthorWhereInput
    some?: BookAuthorWhereInput
    none?: BookAuthorWhereInput
  }

  export type PhysicalBookListRelationFilter = {
    every?: PhysicalBookWhereInput
    some?: PhysicalBookWhereInput
    none?: PhysicalBookWhereInput
  }

  export type BookAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhysicalBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type PhysicalBookCountOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookMaxOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookMinOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookAuthorBookIdAuthorIdCompoundUniqueInput = {
    bookId: number
    authorId: number
  }

  export type BookAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BookAuthorAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BookAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BookAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BookAuthorSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PhysicalBookScalarRelationFilter = {
    is?: PhysicalBookWhereInput
    isNot?: PhysicalBookWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
    loanDate?: SortOrder
    returnDate?: SortOrder
  }

  export type LoanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
    loanDate?: SortOrder
    returnDate?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
    loanDate?: SortOrder
    returnDate?: SortOrder
  }

  export type LoanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    physicalBookId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LoanCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LoanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type BookAuthorCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type PhysicalBookCreateNestedManyWithoutBookInput = {
    create?: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput> | PhysicalBookCreateWithoutBookInput[] | PhysicalBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutBookInput | PhysicalBookCreateOrConnectWithoutBookInput[]
    createMany?: PhysicalBookCreateManyBookInputEnvelope
    connect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type PhysicalBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput> | PhysicalBookCreateWithoutBookInput[] | PhysicalBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutBookInput | PhysicalBookCreateOrConnectWithoutBookInput[]
    createMany?: PhysicalBookCreateManyBookInputEnvelope
    connect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookAuthorUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type PhysicalBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput> | PhysicalBookCreateWithoutBookInput[] | PhysicalBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutBookInput | PhysicalBookCreateOrConnectWithoutBookInput[]
    upsert?: PhysicalBookUpsertWithWhereUniqueWithoutBookInput | PhysicalBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: PhysicalBookCreateManyBookInputEnvelope
    set?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    disconnect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    delete?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    connect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    update?: PhysicalBookUpdateWithWhereUniqueWithoutBookInput | PhysicalBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: PhysicalBookUpdateManyWithWhereWithoutBookInput | PhysicalBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: PhysicalBookScalarWhereInput | PhysicalBookScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type PhysicalBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput> | PhysicalBookCreateWithoutBookInput[] | PhysicalBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutBookInput | PhysicalBookCreateOrConnectWithoutBookInput[]
    upsert?: PhysicalBookUpsertWithWhereUniqueWithoutBookInput | PhysicalBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: PhysicalBookCreateManyBookInputEnvelope
    set?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    disconnect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    delete?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    connect?: PhysicalBookWhereUniqueInput | PhysicalBookWhereUniqueInput[]
    update?: PhysicalBookUpdateWithWhereUniqueWithoutBookInput | PhysicalBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: PhysicalBookUpdateManyWithWhereWithoutBookInput | PhysicalBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: PhysicalBookScalarWhereInput | PhysicalBookScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutPhysicalBooksInput = {
    create?: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutPhysicalBooksInput
    connect?: BookWhereUniqueInput
  }

  export type LoanCreateNestedManyWithoutPhysicalBookInput = {
    create?: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput> | LoanCreateWithoutPhysicalBookInput[] | LoanUncheckedCreateWithoutPhysicalBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutPhysicalBookInput | LoanCreateOrConnectWithoutPhysicalBookInput[]
    createMany?: LoanCreateManyPhysicalBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutPhysicalBookInput = {
    create?: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput> | LoanCreateWithoutPhysicalBookInput[] | LoanUncheckedCreateWithoutPhysicalBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutPhysicalBookInput | LoanCreateOrConnectWithoutPhysicalBookInput[]
    createMany?: LoanCreateManyPhysicalBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateOneRequiredWithoutPhysicalBooksNestedInput = {
    create?: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutPhysicalBooksInput
    upsert?: BookUpsertWithoutPhysicalBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutPhysicalBooksInput, BookUpdateWithoutPhysicalBooksInput>, BookUncheckedUpdateWithoutPhysicalBooksInput>
  }

  export type LoanUpdateManyWithoutPhysicalBookNestedInput = {
    create?: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput> | LoanCreateWithoutPhysicalBookInput[] | LoanUncheckedCreateWithoutPhysicalBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutPhysicalBookInput | LoanCreateOrConnectWithoutPhysicalBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutPhysicalBookInput | LoanUpsertWithWhereUniqueWithoutPhysicalBookInput[]
    createMany?: LoanCreateManyPhysicalBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutPhysicalBookInput | LoanUpdateWithWhereUniqueWithoutPhysicalBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutPhysicalBookInput | LoanUpdateManyWithWhereWithoutPhysicalBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutPhysicalBookNestedInput = {
    create?: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput> | LoanCreateWithoutPhysicalBookInput[] | LoanUncheckedCreateWithoutPhysicalBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutPhysicalBookInput | LoanCreateOrConnectWithoutPhysicalBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutPhysicalBookInput | LoanUpsertWithWhereUniqueWithoutPhysicalBookInput[]
    createMany?: LoanCreateManyPhysicalBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutPhysicalBookInput | LoanUpdateWithWhereUniqueWithoutPhysicalBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutPhysicalBookInput | LoanUpdateManyWithWhereWithoutPhysicalBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type BookAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutBookAuthorsInput = {
    create?: XOR<BookCreateWithoutBookAuthorsInput, BookUncheckedCreateWithoutBookAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookAuthorsInput
    connect?: BookWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutBookAuthorsInput = {
    create?: XOR<AuthorCreateWithoutBookAuthorsInput, AuthorUncheckedCreateWithoutBookAuthorsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBookAuthorsInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBookAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutBookAuthorsInput, BookUncheckedCreateWithoutBookAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookAuthorsInput
    upsert?: BookUpsertWithoutBookAuthorsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBookAuthorsInput, BookUpdateWithoutBookAuthorsInput>, BookUncheckedUpdateWithoutBookAuthorsInput>
  }

  export type AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = {
    create?: XOR<AuthorCreateWithoutBookAuthorsInput, AuthorUncheckedCreateWithoutBookAuthorsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBookAuthorsInput
    upsert?: AuthorUpsertWithoutBookAuthorsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBookAuthorsInput, AuthorUpdateWithoutBookAuthorsInput>, AuthorUncheckedUpdateWithoutBookAuthorsInput>
  }

  export type PhysicalBookCreateNestedOneWithoutLoansInput = {
    create?: XOR<PhysicalBookCreateWithoutLoansInput, PhysicalBookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutLoansInput
    connect?: PhysicalBookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLoansInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhysicalBookUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<PhysicalBookCreateWithoutLoansInput, PhysicalBookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: PhysicalBookCreateOrConnectWithoutLoansInput
    upsert?: PhysicalBookUpsertWithoutLoansInput
    connect?: PhysicalBookWhereUniqueInput
    update?: XOR<XOR<PhysicalBookUpdateToOneWithWhereWithoutLoansInput, PhysicalBookUpdateWithoutLoansInput>, PhysicalBookUncheckedUpdateWithoutLoansInput>
  }

  export type UserUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    upsert?: UserUpsertWithoutLoansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoansInput, UserUpdateWithoutLoansInput>, UserUncheckedUpdateWithoutLoansInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LoanCreateWithoutUserInput = {
    loanDate?: Date | string
    returnDate?: Date | string | null
    physicalBook: PhysicalBookCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutUserInput = {
    id?: number
    physicalBookId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanCreateOrConnectWithoutUserInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanCreateManyUserInputEnvelope = {
    data: LoanCreateManyUserInput | LoanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoanUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
  }

  export type LoanUpdateManyWithWhereWithoutUserInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutUserInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: IntFilter<"Loan"> | number
    userId?: IntFilter<"Loan"> | number
    physicalBookId?: IntFilter<"Loan"> | number
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
  }

  export type BookAuthorCreateWithoutBookInput = {
    author: AuthorCreateNestedOneWithoutBookAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutBookInput = {
    id?: number
    authorId: number
  }

  export type BookAuthorCreateOrConnectWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorCreateManyBookInputEnvelope = {
    data: BookAuthorCreateManyBookInput | BookAuthorCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type PhysicalBookCreateWithoutBookInput = {
    available?: boolean
    loans?: LoanCreateNestedManyWithoutPhysicalBookInput
  }

  export type PhysicalBookUncheckedCreateWithoutBookInput = {
    id?: number
    available?: boolean
    loans?: LoanUncheckedCreateNestedManyWithoutPhysicalBookInput
  }

  export type PhysicalBookCreateOrConnectWithoutBookInput = {
    where: PhysicalBookWhereUniqueInput
    create: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput>
  }

  export type PhysicalBookCreateManyBookInputEnvelope = {
    data: PhysicalBookCreateManyBookInput | PhysicalBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutBookInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutBookInput>
  }

  export type BookAuthorScalarWhereInput = {
    AND?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    OR?: BookAuthorScalarWhereInput[]
    NOT?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    id?: IntFilter<"BookAuthor"> | number
    bookId?: IntFilter<"BookAuthor"> | number
    authorId?: IntFilter<"BookAuthor"> | number
  }

  export type PhysicalBookUpsertWithWhereUniqueWithoutBookInput = {
    where: PhysicalBookWhereUniqueInput
    update: XOR<PhysicalBookUpdateWithoutBookInput, PhysicalBookUncheckedUpdateWithoutBookInput>
    create: XOR<PhysicalBookCreateWithoutBookInput, PhysicalBookUncheckedCreateWithoutBookInput>
  }

  export type PhysicalBookUpdateWithWhereUniqueWithoutBookInput = {
    where: PhysicalBookWhereUniqueInput
    data: XOR<PhysicalBookUpdateWithoutBookInput, PhysicalBookUncheckedUpdateWithoutBookInput>
  }

  export type PhysicalBookUpdateManyWithWhereWithoutBookInput = {
    where: PhysicalBookScalarWhereInput
    data: XOR<PhysicalBookUpdateManyMutationInput, PhysicalBookUncheckedUpdateManyWithoutBookInput>
  }

  export type PhysicalBookScalarWhereInput = {
    AND?: PhysicalBookScalarWhereInput | PhysicalBookScalarWhereInput[]
    OR?: PhysicalBookScalarWhereInput[]
    NOT?: PhysicalBookScalarWhereInput | PhysicalBookScalarWhereInput[]
    id?: IntFilter<"PhysicalBook"> | number
    available?: BoolFilter<"PhysicalBook"> | boolean
    bookId?: IntFilter<"PhysicalBook"> | number
  }

  export type BookCreateWithoutPhysicalBooksInput = {
    isbn: string
    title: string
    publicationDate?: Date | string | null
    bookAuthors?: BookAuthorCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPhysicalBooksInput = {
    id?: number
    isbn: string
    title: string
    publicationDate?: Date | string | null
    bookAuthors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPhysicalBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
  }

  export type LoanCreateWithoutPhysicalBookInput = {
    loanDate?: Date | string
    returnDate?: Date | string | null
    user: UserCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutPhysicalBookInput = {
    id?: number
    userId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanCreateOrConnectWithoutPhysicalBookInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput>
  }

  export type LoanCreateManyPhysicalBookInputEnvelope = {
    data: LoanCreateManyPhysicalBookInput | LoanCreateManyPhysicalBookInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutPhysicalBooksInput = {
    update: XOR<BookUpdateWithoutPhysicalBooksInput, BookUncheckedUpdateWithoutPhysicalBooksInput>
    create: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutPhysicalBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutPhysicalBooksInput, BookUncheckedUpdateWithoutPhysicalBooksInput>
  }

  export type BookUpdateWithoutPhysicalBooksInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAuthors?: BookAuthorUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPhysicalBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAuthors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
  }

  export type LoanUpsertWithWhereUniqueWithoutPhysicalBookInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutPhysicalBookInput, LoanUncheckedUpdateWithoutPhysicalBookInput>
    create: XOR<LoanCreateWithoutPhysicalBookInput, LoanUncheckedCreateWithoutPhysicalBookInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutPhysicalBookInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutPhysicalBookInput, LoanUncheckedUpdateWithoutPhysicalBookInput>
  }

  export type LoanUpdateManyWithWhereWithoutPhysicalBookInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutPhysicalBookInput>
  }

  export type BookAuthorCreateWithoutAuthorInput = {
    book: BookCreateNestedOneWithoutBookAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutAuthorInput = {
    id?: number
    bookId: number
  }

  export type BookAuthorCreateOrConnectWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorCreateManyAuthorInputEnvelope = {
    data: BookAuthorCreateManyAuthorInput | BookAuthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookCreateWithoutBookAuthorsInput = {
    isbn: string
    title: string
    publicationDate?: Date | string | null
    physicalBooks?: PhysicalBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBookAuthorsInput = {
    id?: number
    isbn: string
    title: string
    publicationDate?: Date | string | null
    physicalBooks?: PhysicalBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBookAuthorsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBookAuthorsInput, BookUncheckedCreateWithoutBookAuthorsInput>
  }

  export type AuthorCreateWithoutBookAuthorsInput = {
    name: string
  }

  export type AuthorUncheckedCreateWithoutBookAuthorsInput = {
    id?: number
    name: string
  }

  export type AuthorCreateOrConnectWithoutBookAuthorsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBookAuthorsInput, AuthorUncheckedCreateWithoutBookAuthorsInput>
  }

  export type BookUpsertWithoutBookAuthorsInput = {
    update: XOR<BookUpdateWithoutBookAuthorsInput, BookUncheckedUpdateWithoutBookAuthorsInput>
    create: XOR<BookCreateWithoutBookAuthorsInput, BookUncheckedCreateWithoutBookAuthorsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBookAuthorsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBookAuthorsInput, BookUncheckedUpdateWithoutBookAuthorsInput>
  }

  export type BookUpdateWithoutBookAuthorsInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalBooks?: PhysicalBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBookAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalBooks?: PhysicalBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type AuthorUpsertWithoutBookAuthorsInput = {
    update: XOR<AuthorUpdateWithoutBookAuthorsInput, AuthorUncheckedUpdateWithoutBookAuthorsInput>
    create: XOR<AuthorCreateWithoutBookAuthorsInput, AuthorUncheckedCreateWithoutBookAuthorsInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBookAuthorsInput, AuthorUncheckedUpdateWithoutBookAuthorsInput>
  }

  export type AuthorUpdateWithoutBookAuthorsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutBookAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhysicalBookCreateWithoutLoansInput = {
    available?: boolean
    book: BookCreateNestedOneWithoutPhysicalBooksInput
  }

  export type PhysicalBookUncheckedCreateWithoutLoansInput = {
    id?: number
    available?: boolean
    bookId: number
  }

  export type PhysicalBookCreateOrConnectWithoutLoansInput = {
    where: PhysicalBookWhereUniqueInput
    create: XOR<PhysicalBookCreateWithoutLoansInput, PhysicalBookUncheckedCreateWithoutLoansInput>
  }

  export type UserCreateWithoutLoansInput = {
    name: string
    address?: string | null
  }

  export type UserUncheckedCreateWithoutLoansInput = {
    id?: number
    name: string
    address?: string | null
  }

  export type UserCreateOrConnectWithoutLoansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
  }

  export type PhysicalBookUpsertWithoutLoansInput = {
    update: XOR<PhysicalBookUpdateWithoutLoansInput, PhysicalBookUncheckedUpdateWithoutLoansInput>
    create: XOR<PhysicalBookCreateWithoutLoansInput, PhysicalBookUncheckedCreateWithoutLoansInput>
    where?: PhysicalBookWhereInput
  }

  export type PhysicalBookUpdateToOneWithWhereWithoutLoansInput = {
    where?: PhysicalBookWhereInput
    data: XOR<PhysicalBookUpdateWithoutLoansInput, PhysicalBookUncheckedUpdateWithoutLoansInput>
  }

  export type PhysicalBookUpdateWithoutLoansInput = {
    available?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutPhysicalBooksNestedInput
  }

  export type PhysicalBookUncheckedUpdateWithoutLoansInput = {
    id?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutLoansInput = {
    update: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
  }

  export type UserUpdateWithoutLoansInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutLoansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoanCreateManyUserInput = {
    id?: number
    physicalBookId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanUpdateWithoutUserInput = {
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalBook?: PhysicalBookUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    physicalBookId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    physicalBookId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAuthorCreateManyBookInput = {
    id?: number
    authorId: number
  }

  export type PhysicalBookCreateManyBookInput = {
    id?: number
    available?: boolean
  }

  export type BookAuthorUpdateWithoutBookInput = {
    author?: AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PhysicalBookUpdateWithoutBookInput = {
    available?: BoolFieldUpdateOperationsInput | boolean
    loans?: LoanUpdateManyWithoutPhysicalBookNestedInput
  }

  export type PhysicalBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    loans?: LoanUncheckedUpdateManyWithoutPhysicalBookNestedInput
  }

  export type PhysicalBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LoanCreateManyPhysicalBookInput = {
    id?: number
    userId: number
    loanDate?: Date | string
    returnDate?: Date | string | null
  }

  export type LoanUpdateWithoutPhysicalBookInput = {
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutPhysicalBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanUncheckedUpdateManyWithoutPhysicalBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAuthorCreateManyAuthorInput = {
    id?: number
    bookId: number
  }

  export type BookAuthorUpdateWithoutAuthorInput = {
    book?: BookUpdateOneRequiredWithoutBookAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}