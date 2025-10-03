
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Libro
 * 
 */
export type Libro = $Result.DefaultSelection<Prisma.$LibroPayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>
/**
 * Model LibroAutor
 * 
 */
export type LibroAutor = $Result.DefaultSelection<Prisma.$LibroAutorPayload>
/**
 * Model Prestamo
 * 
 */
export type Prestamo = $Result.DefaultSelection<Prisma.$PrestamoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **Libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.LibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libroAutor`: Exposes CRUD operations for the **LibroAutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibroAutors
    * const libroAutors = await prisma.libroAutor.findMany()
    * ```
    */
  get libroAutor(): Prisma.LibroAutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamo`: Exposes CRUD operations for the **Prestamo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamo.findMany()
    * ```
    */
  get prestamo(): Prisma.PrestamoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Usuario: 'Usuario',
    Libro: 'Libro',
    Autor: 'Autor',
    LibroAutor: 'LibroAutor',
    Prestamo: 'Prestamo'
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
      modelProps: "usuario" | "libro" | "autor" | "libroAutor" | "prestamo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Libro: {
        payload: Prisma.$LibroPayload<ExtArgs>
        fields: Prisma.LibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findFirst: {
            args: Prisma.LibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findMany: {
            args: Prisma.LibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          create: {
            args: Prisma.LibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          createMany: {
            args: Prisma.LibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          delete: {
            args: Prisma.LibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          update: {
            args: Prisma.LibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          deleteMany: {
            args: Prisma.LibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          upsert: {
            args: Prisma.LibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.LibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      LibroAutor: {
        payload: Prisma.$LibroAutorPayload<ExtArgs>
        fields: Prisma.LibroAutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibroAutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibroAutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          findFirst: {
            args: Prisma.LibroAutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibroAutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          findMany: {
            args: Prisma.LibroAutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>[]
          }
          create: {
            args: Prisma.LibroAutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          createMany: {
            args: Prisma.LibroAutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibroAutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>[]
          }
          delete: {
            args: Prisma.LibroAutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          update: {
            args: Prisma.LibroAutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          deleteMany: {
            args: Prisma.LibroAutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibroAutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibroAutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>[]
          }
          upsert: {
            args: Prisma.LibroAutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroAutorPayload>
          }
          aggregate: {
            args: Prisma.LibroAutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibroAutor>
          }
          groupBy: {
            args: Prisma.LibroAutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroAutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibroAutorCountArgs<ExtArgs>
            result: $Utils.Optional<LibroAutorCountAggregateOutputType> | number
          }
        }
      }
      Prestamo: {
        payload: Prisma.$PrestamoPayload<ExtArgs>
        fields: Prisma.PrestamoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestamoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestamoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          findFirst: {
            args: Prisma.PrestamoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestamoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          findMany: {
            args: Prisma.PrestamoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          create: {
            args: Prisma.PrestamoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          createMany: {
            args: Prisma.PrestamoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestamoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          delete: {
            args: Prisma.PrestamoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          update: {
            args: Prisma.PrestamoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          deleteMany: {
            args: Prisma.PrestamoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestamoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestamoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          upsert: {
            args: Prisma.PrestamoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          aggregate: {
            args: Prisma.PrestamoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamo>
          }
          groupBy: {
            args: Prisma.PrestamoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestamoCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    libro?: LibroOmit
    autor?: AutorOmit
    libroAutor?: LibroAutorOmit
    prestamo?: PrestamoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Prestamos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prestamos?: boolean | UsuarioCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
  }


  /**
   * Count Type LibroCountOutputType
   */

  export type LibroCountOutputType = {
    LibroAutor: number
    Prestamos: number
  }

  export type LibroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LibroAutor?: boolean | LibroCountOutputTypeCountLibroAutorArgs
    Prestamos?: boolean | LibroCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroCountOutputType
     */
    select?: LibroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountLibroAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroAutorWhereInput
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    LibroAutor: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LibroAutor?: boolean | AutorCountOutputTypeCountLibroAutorArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLibroAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroAutorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    direccion: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    Prestamos?: boolean | Usuario$PrestamosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prestamos?: boolean | Usuario$PrestamosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Prestamos: Prisma.$PrestamoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Prestamos<T extends Usuario$PrestamosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$PrestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly direccion: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Prestamos
   */
  export type Usuario$PrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    cursor?: PrestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroAvgAggregateOutputType = {
    id: number | null
  }

  export type LibroSumAggregateOutputType = {
    id: number | null
  }

  export type LibroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    fechaPublicacion: Date | null
    disponible: boolean | null
  }

  export type LibroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    fechaPublicacion: Date | null
    disponible: boolean | null
  }

  export type LibroCountAggregateOutputType = {
    id: number
    titulo: number
    fechaPublicacion: number
    disponible: number
    _all: number
  }


  export type LibroAvgAggregateInputType = {
    id?: true
  }

  export type LibroSumAggregateInputType = {
    id?: true
  }

  export type LibroMinAggregateInputType = {
    id?: true
    titulo?: true
    fechaPublicacion?: true
    disponible?: true
  }

  export type LibroMaxAggregateInputType = {
    id?: true
    titulo?: true
    fechaPublicacion?: true
    disponible?: true
  }

  export type LibroCountAggregateInputType = {
    id?: true
    titulo?: true
    fechaPublicacion?: true
    disponible?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libro to aggregate.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type LibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithAggregationInput | LibroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: LibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _avg?: LibroAvgAggregateInputType
    _sum?: LibroSumAggregateInputType
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id: number
    titulo: string
    fechaPublicacion: Date | null
    disponible: boolean
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends LibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type LibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fechaPublicacion?: boolean
    disponible?: boolean
    LibroAutor?: boolean | Libro$LibroAutorArgs<ExtArgs>
    Prestamos?: boolean | Libro$PrestamosArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fechaPublicacion?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fechaPublicacion?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectScalar = {
    id?: boolean
    titulo?: boolean
    fechaPublicacion?: boolean
    disponible?: boolean
  }

  export type LibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "fechaPublicacion" | "disponible", ExtArgs["result"]["libro"]>
  export type LibroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LibroAutor?: boolean | Libro$LibroAutorArgs<ExtArgs>
    Prestamos?: boolean | Libro$PrestamosArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LibroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libro"
    objects: {
      LibroAutor: Prisma.$LibroAutorPayload<ExtArgs>[]
      Prestamos: Prisma.$PrestamoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      fechaPublicacion: Date | null
      disponible: boolean
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type LibroGetPayload<S extends boolean | null | undefined | LibroDefaultArgs> = $Result.GetResult<Prisma.$LibroPayload, S>

  type LibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface LibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libro'], meta: { name: 'Libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {LibroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroFindUniqueArgs>(args: SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(args: SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroFindFirstArgs>(args?: SelectSubset<T, LibroFindFirstArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(args?: SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libroWithIdOnly = await prisma.libro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibroFindManyArgs>(args?: SelectSubset<T, LibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {LibroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends LibroCreateArgs>(args: SelectSubset<T, LibroCreateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {LibroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibroCreateManyArgs>(args?: SelectSubset<T, LibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {LibroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(args?: SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libro.
     * @param {LibroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends LibroDeleteArgs>(args: SelectSubset<T, LibroDeleteArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {LibroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibroUpdateArgs>(args: SelectSubset<T, LibroUpdateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {LibroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibroDeleteManyArgs>(args?: SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibroUpdateManyArgs>(args: SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {LibroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.updateManyAndReturn({
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
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(args: SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libro.
     * @param {LibroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends LibroUpsertArgs>(args: SelectSubset<T, LibroUpsertArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends LibroCountArgs>(
      args?: Subset<T, LibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroGroupByArgs} args - Group by arguments.
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
      T extends LibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroGroupByArgs['orderBy'] }
        : { orderBy?: LibroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libro model
   */
  readonly fields: LibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LibroAutor<T extends Libro$LibroAutorArgs<ExtArgs> = {}>(args?: Subset<T, Libro$LibroAutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Prestamos<T extends Libro$PrestamosArgs<ExtArgs> = {}>(args?: Subset<T, Libro$PrestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Libro model
   */
  interface LibroFieldRefs {
    readonly id: FieldRef<"Libro", 'Int'>
    readonly titulo: FieldRef<"Libro", 'String'>
    readonly fechaPublicacion: FieldRef<"Libro", 'DateTime'>
    readonly disponible: FieldRef<"Libro", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Libro findUnique
   */
  export type LibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findUniqueOrThrow
   */
  export type LibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findFirst
   */
  export type LibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findFirstOrThrow
   */
  export type LibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findMany
   */
  export type LibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libros to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro create
   */
  export type LibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to create a Libro.
     */
    data: XOR<LibroCreateInput, LibroUncheckedCreateInput>
  }

  /**
   * Libro createMany
   */
  export type LibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro createManyAndReturn
   */
  export type LibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro update
   */
  export type LibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to update a Libro.
     */
    data: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
    /**
     * Choose, which Libro to update.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro updateMany
   */
  export type LibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro updateManyAndReturn
   */
  export type LibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro upsert
   */
  export type LibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The filter to search for the Libro to update in case it exists.
     */
    where: LibroWhereUniqueInput
    /**
     * In case the Libro found by the `where` argument doesn't exist, create a new Libro with this data.
     */
    create: XOR<LibroCreateInput, LibroUncheckedCreateInput>
    /**
     * In case the Libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
  }

  /**
   * Libro delete
   */
  export type LibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter which Libro to delete.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro deleteMany
   */
  export type LibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libros to delete
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to delete.
     */
    limit?: number
  }

  /**
   * Libro.LibroAutor
   */
  export type Libro$LibroAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    where?: LibroAutorWhereInput
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    cursor?: LibroAutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroAutorScalarFieldEnum | LibroAutorScalarFieldEnum[]
  }

  /**
   * Libro.Prestamos
   */
  export type Libro$PrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    cursor?: PrestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Libro without action
   */
  export type LibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nombre: string
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    LibroAutor?: boolean | Autor$LibroAutorArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LibroAutor?: boolean | Autor$LibroAutorArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      LibroAutor: Prisma.$LibroAutorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
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
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LibroAutor<T extends Autor$LibroAutorArgs<ExtArgs> = {}>(args?: Subset<T, Autor$LibroAutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nombre: FieldRef<"Autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.LibroAutor
   */
  export type Autor$LibroAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    where?: LibroAutorWhereInput
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    cursor?: LibroAutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroAutorScalarFieldEnum | LibroAutorScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Model LibroAutor
   */

  export type AggregateLibroAutor = {
    _count: LibroAutorCountAggregateOutputType | null
    _avg: LibroAutorAvgAggregateOutputType | null
    _sum: LibroAutorSumAggregateOutputType | null
    _min: LibroAutorMinAggregateOutputType | null
    _max: LibroAutorMaxAggregateOutputType | null
  }

  export type LibroAutorAvgAggregateOutputType = {
    libroId: number | null
    autorId: number | null
  }

  export type LibroAutorSumAggregateOutputType = {
    libroId: number | null
    autorId: number | null
  }

  export type LibroAutorMinAggregateOutputType = {
    libroId: number | null
    autorId: number | null
  }

  export type LibroAutorMaxAggregateOutputType = {
    libroId: number | null
    autorId: number | null
  }

  export type LibroAutorCountAggregateOutputType = {
    libroId: number
    autorId: number
    _all: number
  }


  export type LibroAutorAvgAggregateInputType = {
    libroId?: true
    autorId?: true
  }

  export type LibroAutorSumAggregateInputType = {
    libroId?: true
    autorId?: true
  }

  export type LibroAutorMinAggregateInputType = {
    libroId?: true
    autorId?: true
  }

  export type LibroAutorMaxAggregateInputType = {
    libroId?: true
    autorId?: true
  }

  export type LibroAutorCountAggregateInputType = {
    libroId?: true
    autorId?: true
    _all?: true
  }

  export type LibroAutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibroAutor to aggregate.
     */
    where?: LibroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibroAutors to fetch.
     */
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibroAutors
    **/
    _count?: true | LibroAutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroAutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroAutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroAutorMaxAggregateInputType
  }

  export type GetLibroAutorAggregateType<T extends LibroAutorAggregateArgs> = {
        [P in keyof T & keyof AggregateLibroAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibroAutor[P]>
      : GetScalarType<T[P], AggregateLibroAutor[P]>
  }




  export type LibroAutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroAutorWhereInput
    orderBy?: LibroAutorOrderByWithAggregationInput | LibroAutorOrderByWithAggregationInput[]
    by: LibroAutorScalarFieldEnum[] | LibroAutorScalarFieldEnum
    having?: LibroAutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroAutorCountAggregateInputType | true
    _avg?: LibroAutorAvgAggregateInputType
    _sum?: LibroAutorSumAggregateInputType
    _min?: LibroAutorMinAggregateInputType
    _max?: LibroAutorMaxAggregateInputType
  }

  export type LibroAutorGroupByOutputType = {
    libroId: number
    autorId: number
    _count: LibroAutorCountAggregateOutputType | null
    _avg: LibroAutorAvgAggregateOutputType | null
    _sum: LibroAutorSumAggregateOutputType | null
    _min: LibroAutorMinAggregateOutputType | null
    _max: LibroAutorMaxAggregateOutputType | null
  }

  type GetLibroAutorGroupByPayload<T extends LibroAutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroAutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroAutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroAutorGroupByOutputType[P]>
            : GetScalarType<T[P], LibroAutorGroupByOutputType[P]>
        }
      >
    >


  export type LibroAutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    libroId?: boolean
    autorId?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libroAutor"]>

  export type LibroAutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    libroId?: boolean
    autorId?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libroAutor"]>

  export type LibroAutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    libroId?: boolean
    autorId?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libroAutor"]>

  export type LibroAutorSelectScalar = {
    libroId?: boolean
    autorId?: boolean
  }

  export type LibroAutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"libroId" | "autorId", ExtArgs["result"]["libroAutor"]>
  export type LibroAutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type LibroAutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type LibroAutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }

  export type $LibroAutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibroAutor"
    objects: {
      autor: Prisma.$AutorPayload<ExtArgs>
      libro: Prisma.$LibroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      libroId: number
      autorId: number
    }, ExtArgs["result"]["libroAutor"]>
    composites: {}
  }

  type LibroAutorGetPayload<S extends boolean | null | undefined | LibroAutorDefaultArgs> = $Result.GetResult<Prisma.$LibroAutorPayload, S>

  type LibroAutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibroAutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroAutorCountAggregateInputType | true
    }

  export interface LibroAutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibroAutor'], meta: { name: 'LibroAutor' } }
    /**
     * Find zero or one LibroAutor that matches the filter.
     * @param {LibroAutorFindUniqueArgs} args - Arguments to find a LibroAutor
     * @example
     * // Get one LibroAutor
     * const libroAutor = await prisma.libroAutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroAutorFindUniqueArgs>(args: SelectSubset<T, LibroAutorFindUniqueArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LibroAutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroAutorFindUniqueOrThrowArgs} args - Arguments to find a LibroAutor
     * @example
     * // Get one LibroAutor
     * const libroAutor = await prisma.libroAutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroAutorFindUniqueOrThrowArgs>(args: SelectSubset<T, LibroAutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibroAutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorFindFirstArgs} args - Arguments to find a LibroAutor
     * @example
     * // Get one LibroAutor
     * const libroAutor = await prisma.libroAutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroAutorFindFirstArgs>(args?: SelectSubset<T, LibroAutorFindFirstArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibroAutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorFindFirstOrThrowArgs} args - Arguments to find a LibroAutor
     * @example
     * // Get one LibroAutor
     * const libroAutor = await prisma.libroAutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroAutorFindFirstOrThrowArgs>(args?: SelectSubset<T, LibroAutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LibroAutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibroAutors
     * const libroAutors = await prisma.libroAutor.findMany()
     * 
     * // Get first 10 LibroAutors
     * const libroAutors = await prisma.libroAutor.findMany({ take: 10 })
     * 
     * // Only select the `libroId`
     * const libroAutorWithLibroIdOnly = await prisma.libroAutor.findMany({ select: { libroId: true } })
     * 
     */
    findMany<T extends LibroAutorFindManyArgs>(args?: SelectSubset<T, LibroAutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LibroAutor.
     * @param {LibroAutorCreateArgs} args - Arguments to create a LibroAutor.
     * @example
     * // Create one LibroAutor
     * const LibroAutor = await prisma.libroAutor.create({
     *   data: {
     *     // ... data to create a LibroAutor
     *   }
     * })
     * 
     */
    create<T extends LibroAutorCreateArgs>(args: SelectSubset<T, LibroAutorCreateArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LibroAutors.
     * @param {LibroAutorCreateManyArgs} args - Arguments to create many LibroAutors.
     * @example
     * // Create many LibroAutors
     * const libroAutor = await prisma.libroAutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibroAutorCreateManyArgs>(args?: SelectSubset<T, LibroAutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibroAutors and returns the data saved in the database.
     * @param {LibroAutorCreateManyAndReturnArgs} args - Arguments to create many LibroAutors.
     * @example
     * // Create many LibroAutors
     * const libroAutor = await prisma.libroAutor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibroAutors and only return the `libroId`
     * const libroAutorWithLibroIdOnly = await prisma.libroAutor.createManyAndReturn({
     *   select: { libroId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibroAutorCreateManyAndReturnArgs>(args?: SelectSubset<T, LibroAutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LibroAutor.
     * @param {LibroAutorDeleteArgs} args - Arguments to delete one LibroAutor.
     * @example
     * // Delete one LibroAutor
     * const LibroAutor = await prisma.libroAutor.delete({
     *   where: {
     *     // ... filter to delete one LibroAutor
     *   }
     * })
     * 
     */
    delete<T extends LibroAutorDeleteArgs>(args: SelectSubset<T, LibroAutorDeleteArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LibroAutor.
     * @param {LibroAutorUpdateArgs} args - Arguments to update one LibroAutor.
     * @example
     * // Update one LibroAutor
     * const libroAutor = await prisma.libroAutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibroAutorUpdateArgs>(args: SelectSubset<T, LibroAutorUpdateArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LibroAutors.
     * @param {LibroAutorDeleteManyArgs} args - Arguments to filter LibroAutors to delete.
     * @example
     * // Delete a few LibroAutors
     * const { count } = await prisma.libroAutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibroAutorDeleteManyArgs>(args?: SelectSubset<T, LibroAutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibroAutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibroAutors
     * const libroAutor = await prisma.libroAutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibroAutorUpdateManyArgs>(args: SelectSubset<T, LibroAutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibroAutors and returns the data updated in the database.
     * @param {LibroAutorUpdateManyAndReturnArgs} args - Arguments to update many LibroAutors.
     * @example
     * // Update many LibroAutors
     * const libroAutor = await prisma.libroAutor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LibroAutors and only return the `libroId`
     * const libroAutorWithLibroIdOnly = await prisma.libroAutor.updateManyAndReturn({
     *   select: { libroId: true },
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
    updateManyAndReturn<T extends LibroAutorUpdateManyAndReturnArgs>(args: SelectSubset<T, LibroAutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LibroAutor.
     * @param {LibroAutorUpsertArgs} args - Arguments to update or create a LibroAutor.
     * @example
     * // Update or create a LibroAutor
     * const libroAutor = await prisma.libroAutor.upsert({
     *   create: {
     *     // ... data to create a LibroAutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibroAutor we want to update
     *   }
     * })
     */
    upsert<T extends LibroAutorUpsertArgs>(args: SelectSubset<T, LibroAutorUpsertArgs<ExtArgs>>): Prisma__LibroAutorClient<$Result.GetResult<Prisma.$LibroAutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LibroAutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorCountArgs} args - Arguments to filter LibroAutors to count.
     * @example
     * // Count the number of LibroAutors
     * const count = await prisma.libroAutor.count({
     *   where: {
     *     // ... the filter for the LibroAutors we want to count
     *   }
     * })
    **/
    count<T extends LibroAutorCountArgs>(
      args?: Subset<T, LibroAutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroAutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibroAutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibroAutorAggregateArgs>(args: Subset<T, LibroAutorAggregateArgs>): Prisma.PrismaPromise<GetLibroAutorAggregateType<T>>

    /**
     * Group by LibroAutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAutorGroupByArgs} args - Group by arguments.
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
      T extends LibroAutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroAutorGroupByArgs['orderBy'] }
        : { orderBy?: LibroAutorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibroAutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibroAutor model
   */
  readonly fields: LibroAutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibroAutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroAutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends AutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorDefaultArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    libro<T extends LibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibroDefaultArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LibroAutor model
   */
  interface LibroAutorFieldRefs {
    readonly libroId: FieldRef<"LibroAutor", 'Int'>
    readonly autorId: FieldRef<"LibroAutor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LibroAutor findUnique
   */
  export type LibroAutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LibroAutor to fetch.
     */
    where: LibroAutorWhereUniqueInput
  }

  /**
   * LibroAutor findUniqueOrThrow
   */
  export type LibroAutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LibroAutor to fetch.
     */
    where: LibroAutorWhereUniqueInput
  }

  /**
   * LibroAutor findFirst
   */
  export type LibroAutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LibroAutor to fetch.
     */
    where?: LibroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibroAutors to fetch.
     */
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibroAutors.
     */
    cursor?: LibroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibroAutors.
     */
    distinct?: LibroAutorScalarFieldEnum | LibroAutorScalarFieldEnum[]
  }

  /**
   * LibroAutor findFirstOrThrow
   */
  export type LibroAutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LibroAutor to fetch.
     */
    where?: LibroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibroAutors to fetch.
     */
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibroAutors.
     */
    cursor?: LibroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibroAutors.
     */
    distinct?: LibroAutorScalarFieldEnum | LibroAutorScalarFieldEnum[]
  }

  /**
   * LibroAutor findMany
   */
  export type LibroAutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LibroAutors to fetch.
     */
    where?: LibroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibroAutors to fetch.
     */
    orderBy?: LibroAutorOrderByWithRelationInput | LibroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibroAutors.
     */
    cursor?: LibroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibroAutors.
     */
    skip?: number
    distinct?: LibroAutorScalarFieldEnum | LibroAutorScalarFieldEnum[]
  }

  /**
   * LibroAutor create
   */
  export type LibroAutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * The data needed to create a LibroAutor.
     */
    data: XOR<LibroAutorCreateInput, LibroAutorUncheckedCreateInput>
  }

  /**
   * LibroAutor createMany
   */
  export type LibroAutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibroAutors.
     */
    data: LibroAutorCreateManyInput | LibroAutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibroAutor createManyAndReturn
   */
  export type LibroAutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * The data used to create many LibroAutors.
     */
    data: LibroAutorCreateManyInput | LibroAutorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibroAutor update
   */
  export type LibroAutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * The data needed to update a LibroAutor.
     */
    data: XOR<LibroAutorUpdateInput, LibroAutorUncheckedUpdateInput>
    /**
     * Choose, which LibroAutor to update.
     */
    where: LibroAutorWhereUniqueInput
  }

  /**
   * LibroAutor updateMany
   */
  export type LibroAutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibroAutors.
     */
    data: XOR<LibroAutorUpdateManyMutationInput, LibroAutorUncheckedUpdateManyInput>
    /**
     * Filter which LibroAutors to update
     */
    where?: LibroAutorWhereInput
    /**
     * Limit how many LibroAutors to update.
     */
    limit?: number
  }

  /**
   * LibroAutor updateManyAndReturn
   */
  export type LibroAutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * The data used to update LibroAutors.
     */
    data: XOR<LibroAutorUpdateManyMutationInput, LibroAutorUncheckedUpdateManyInput>
    /**
     * Filter which LibroAutors to update
     */
    where?: LibroAutorWhereInput
    /**
     * Limit how many LibroAutors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibroAutor upsert
   */
  export type LibroAutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * The filter to search for the LibroAutor to update in case it exists.
     */
    where: LibroAutorWhereUniqueInput
    /**
     * In case the LibroAutor found by the `where` argument doesn't exist, create a new LibroAutor with this data.
     */
    create: XOR<LibroAutorCreateInput, LibroAutorUncheckedCreateInput>
    /**
     * In case the LibroAutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroAutorUpdateInput, LibroAutorUncheckedUpdateInput>
  }

  /**
   * LibroAutor delete
   */
  export type LibroAutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
    /**
     * Filter which LibroAutor to delete.
     */
    where: LibroAutorWhereUniqueInput
  }

  /**
   * LibroAutor deleteMany
   */
  export type LibroAutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibroAutors to delete
     */
    where?: LibroAutorWhereInput
    /**
     * Limit how many LibroAutors to delete.
     */
    limit?: number
  }

  /**
   * LibroAutor without action
   */
  export type LibroAutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroAutor
     */
    select?: LibroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibroAutor
     */
    omit?: LibroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroAutorInclude<ExtArgs> | null
  }


  /**
   * Model Prestamo
   */

  export type AggregatePrestamo = {
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  export type PrestamoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    libroId: number | null
  }

  export type PrestamoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    libroId: number | null
  }

  export type PrestamoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    libroId: number | null
    fechaPrestamo: Date | null
    fechaDevolucion: Date | null
  }

  export type PrestamoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    libroId: number | null
    fechaPrestamo: Date | null
    fechaDevolucion: Date | null
  }

  export type PrestamoCountAggregateOutputType = {
    id: number
    usuarioId: number
    libroId: number
    fechaPrestamo: number
    fechaDevolucion: number
    _all: number
  }


  export type PrestamoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
  }

  export type PrestamoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
  }

  export type PrestamoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    fechaPrestamo?: true
    fechaDevolucion?: true
  }

  export type PrestamoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    fechaPrestamo?: true
    fechaDevolucion?: true
  }

  export type PrestamoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    fechaPrestamo?: true
    fechaDevolucion?: true
    _all?: true
  }

  export type PrestamoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamo to aggregate.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestamos
    **/
    _count?: true | PrestamoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamoMaxAggregateInputType
  }

  export type GetPrestamoAggregateType<T extends PrestamoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamo[P]>
      : GetScalarType<T[P], AggregatePrestamo[P]>
  }




  export type PrestamoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithAggregationInput | PrestamoOrderByWithAggregationInput[]
    by: PrestamoScalarFieldEnum[] | PrestamoScalarFieldEnum
    having?: PrestamoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamoCountAggregateInputType | true
    _avg?: PrestamoAvgAggregateInputType
    _sum?: PrestamoSumAggregateInputType
    _min?: PrestamoMinAggregateInputType
    _max?: PrestamoMaxAggregateInputType
  }

  export type PrestamoGroupByOutputType = {
    id: number
    usuarioId: number
    libroId: number
    fechaPrestamo: Date
    fechaDevolucion: Date | null
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  type GetPrestamoGroupByPayload<T extends PrestamoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
        }
      >
    >


  export type PrestamoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    fechaPrestamo?: boolean
    fechaDevolucion?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    fechaPrestamo?: boolean
    fechaDevolucion?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    fechaPrestamo?: boolean
    fechaDevolucion?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    fechaPrestamo?: boolean
    fechaDevolucion?: boolean
  }

  export type PrestamoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "libroId" | "fechaPrestamo" | "fechaDevolucion", ExtArgs["result"]["prestamo"]>
  export type PrestamoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestamoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestamoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PrestamoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestamo"
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      libroId: number
      fechaPrestamo: Date
      fechaDevolucion: Date | null
    }, ExtArgs["result"]["prestamo"]>
    composites: {}
  }

  type PrestamoGetPayload<S extends boolean | null | undefined | PrestamoDefaultArgs> = $Result.GetResult<Prisma.$PrestamoPayload, S>

  type PrestamoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamoCountAggregateInputType | true
    }

  export interface PrestamoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestamo'], meta: { name: 'Prestamo' } }
    /**
     * Find zero or one Prestamo that matches the filter.
     * @param {PrestamoFindUniqueArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestamoFindUniqueArgs>(args: SelectSubset<T, PrestamoFindUniqueArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestamoFindUniqueOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestamoFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindFirstArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestamoFindFirstArgs>(args?: SelectSubset<T, PrestamoFindFirstArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindFirstOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestamoFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestamoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamo.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prestamoWithIdOnly = await prisma.prestamo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrestamoFindManyArgs>(args?: SelectSubset<T, PrestamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamo.
     * @param {PrestamoCreateArgs} args - Arguments to create a Prestamo.
     * @example
     * // Create one Prestamo
     * const Prestamo = await prisma.prestamo.create({
     *   data: {
     *     // ... data to create a Prestamo
     *   }
     * })
     * 
     */
    create<T extends PrestamoCreateArgs>(args: SelectSubset<T, PrestamoCreateArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {PrestamoCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestamoCreateManyArgs>(args?: SelectSubset<T, PrestamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamos and returns the data saved in the database.
     * @param {PrestamoCreateManyAndReturnArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamos and only return the `id`
     * const prestamoWithIdOnly = await prisma.prestamo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestamoCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamo.
     * @param {PrestamoDeleteArgs} args - Arguments to delete one Prestamo.
     * @example
     * // Delete one Prestamo
     * const Prestamo = await prisma.prestamo.delete({
     *   where: {
     *     // ... filter to delete one Prestamo
     *   }
     * })
     * 
     */
    delete<T extends PrestamoDeleteArgs>(args: SelectSubset<T, PrestamoDeleteArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamo.
     * @param {PrestamoUpdateArgs} args - Arguments to update one Prestamo.
     * @example
     * // Update one Prestamo
     * const prestamo = await prisma.prestamo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestamoUpdateArgs>(args: SelectSubset<T, PrestamoUpdateArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {PrestamoDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestamoDeleteManyArgs>(args?: SelectSubset<T, PrestamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestamoUpdateManyArgs>(args: SelectSubset<T, PrestamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos and returns the data updated in the database.
     * @param {PrestamoUpdateManyAndReturnArgs} args - Arguments to update many Prestamos.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamos and only return the `id`
     * const prestamoWithIdOnly = await prisma.prestamo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrestamoUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamo.
     * @param {PrestamoUpsertArgs} args - Arguments to update or create a Prestamo.
     * @example
     * // Update or create a Prestamo
     * const prestamo = await prisma.prestamo.upsert({
     *   create: {
     *     // ... data to create a Prestamo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamo we want to update
     *   }
     * })
     */
    upsert<T extends PrestamoUpsertArgs>(args: SelectSubset<T, PrestamoUpsertArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamo.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends PrestamoCountArgs>(
      args?: Subset<T, PrestamoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestamoAggregateArgs>(args: Subset<T, PrestamoAggregateArgs>): Prisma.PrismaPromise<GetPrestamoAggregateType<T>>

    /**
     * Group by Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoGroupByArgs} args - Group by arguments.
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
      T extends PrestamoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestamoGroupByArgs['orderBy'] }
        : { orderBy?: PrestamoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrestamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestamo model
   */
  readonly fields: PrestamoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestamo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestamoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends LibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibroDefaultArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prestamo model
   */
  interface PrestamoFieldRefs {
    readonly id: FieldRef<"Prestamo", 'Int'>
    readonly usuarioId: FieldRef<"Prestamo", 'Int'>
    readonly libroId: FieldRef<"Prestamo", 'Int'>
    readonly fechaPrestamo: FieldRef<"Prestamo", 'DateTime'>
    readonly fechaDevolucion: FieldRef<"Prestamo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prestamo findUnique
   */
  export type PrestamoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo findUniqueOrThrow
   */
  export type PrestamoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo findFirst
   */
  export type PrestamoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo findFirstOrThrow
   */
  export type PrestamoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo findMany
   */
  export type PrestamoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo create
   */
  export type PrestamoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The data needed to create a Prestamo.
     */
    data: XOR<PrestamoCreateInput, PrestamoUncheckedCreateInput>
  }

  /**
   * Prestamo createMany
   */
  export type PrestamoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamoCreateManyInput | PrestamoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestamo createManyAndReturn
   */
  export type PrestamoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamoCreateManyInput | PrestamoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamo update
   */
  export type PrestamoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The data needed to update a Prestamo.
     */
    data: XOR<PrestamoUpdateInput, PrestamoUncheckedUpdateInput>
    /**
     * Choose, which Prestamo to update.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo updateMany
   */
  export type PrestamoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
  }

  /**
   * Prestamo updateManyAndReturn
   */
  export type PrestamoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamo upsert
   */
  export type PrestamoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The filter to search for the Prestamo to update in case it exists.
     */
    where: PrestamoWhereUniqueInput
    /**
     * In case the Prestamo found by the `where` argument doesn't exist, create a new Prestamo with this data.
     */
    create: XOR<PrestamoCreateInput, PrestamoUncheckedCreateInput>
    /**
     * In case the Prestamo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestamoUpdateInput, PrestamoUncheckedUpdateInput>
  }

  /**
   * Prestamo delete
   */
  export type PrestamoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter which Prestamo to delete.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo deleteMany
   */
  export type PrestamoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamos to delete
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to delete.
     */
    limit?: number
  }

  /**
   * Prestamo without action
   */
  export type PrestamoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LibroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    fechaPublicacion: 'fechaPublicacion',
    disponible: 'disponible'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const LibroAutorScalarFieldEnum: {
    libroId: 'libroId',
    autorId: 'autorId'
  };

  export type LibroAutorScalarFieldEnum = (typeof LibroAutorScalarFieldEnum)[keyof typeof LibroAutorScalarFieldEnum]


  export const PrestamoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    libroId: 'libroId',
    fechaPrestamo: 'fechaPrestamo',
    fechaDevolucion: 'fechaDevolucion'
  };

  export type PrestamoScalarFieldEnum = (typeof PrestamoScalarFieldEnum)[keyof typeof PrestamoScalarFieldEnum]


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    direccion?: StringNullableFilter<"Usuario"> | string | null
    Prestamos?: PrestamoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    Prestamos?: PrestamoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    direccion?: StringNullableFilter<"Usuario"> | string | null
    Prestamos?: PrestamoListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    direccion?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type LibroWhereInput = {
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    id?: IntFilter<"Libro"> | number
    titulo?: StringFilter<"Libro"> | string
    fechaPublicacion?: DateTimeNullableFilter<"Libro"> | Date | string | null
    disponible?: BoolFilter<"Libro"> | boolean
    LibroAutor?: LibroAutorListRelationFilter
    Prestamos?: PrestamoListRelationFilter
  }

  export type LibroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaPublicacion?: SortOrderInput | SortOrder
    disponible?: SortOrder
    LibroAutor?: LibroAutorOrderByRelationAggregateInput
    Prestamos?: PrestamoOrderByRelationAggregateInput
  }

  export type LibroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    titulo?: StringFilter<"Libro"> | string
    fechaPublicacion?: DateTimeNullableFilter<"Libro"> | Date | string | null
    disponible?: BoolFilter<"Libro"> | boolean
    LibroAutor?: LibroAutorListRelationFilter
    Prestamos?: PrestamoListRelationFilter
  }, "id">

  export type LibroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaPublicacion?: SortOrderInput | SortOrder
    disponible?: SortOrder
    _count?: LibroCountOrderByAggregateInput
    _avg?: LibroAvgOrderByAggregateInput
    _max?: LibroMaxOrderByAggregateInput
    _min?: LibroMinOrderByAggregateInput
    _sum?: LibroSumOrderByAggregateInput
  }

  export type LibroScalarWhereWithAggregatesInput = {
    AND?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    OR?: LibroScalarWhereWithAggregatesInput[]
    NOT?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Libro"> | number
    titulo?: StringWithAggregatesFilter<"Libro"> | string
    fechaPublicacion?: DateTimeNullableWithAggregatesFilter<"Libro"> | Date | string | null
    disponible?: BoolWithAggregatesFilter<"Libro"> | boolean
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nombre?: StringFilter<"Autor"> | string
    LibroAutor?: LibroAutorListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    LibroAutor?: LibroAutorOrderByRelationAggregateInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nombre?: StringFilter<"Autor"> | string
    LibroAutor?: LibroAutorListRelationFilter
  }, "id">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nombre?: StringWithAggregatesFilter<"Autor"> | string
  }

  export type LibroAutorWhereInput = {
    AND?: LibroAutorWhereInput | LibroAutorWhereInput[]
    OR?: LibroAutorWhereInput[]
    NOT?: LibroAutorWhereInput | LibroAutorWhereInput[]
    libroId?: IntFilter<"LibroAutor"> | number
    autorId?: IntFilter<"LibroAutor"> | number
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }

  export type LibroAutorOrderByWithRelationInput = {
    libroId?: SortOrder
    autorId?: SortOrder
    autor?: AutorOrderByWithRelationInput
    libro?: LibroOrderByWithRelationInput
  }

  export type LibroAutorWhereUniqueInput = Prisma.AtLeast<{
    libroId_autorId?: LibroAutorLibroIdAutorIdCompoundUniqueInput
    AND?: LibroAutorWhereInput | LibroAutorWhereInput[]
    OR?: LibroAutorWhereInput[]
    NOT?: LibroAutorWhereInput | LibroAutorWhereInput[]
    libroId?: IntFilter<"LibroAutor"> | number
    autorId?: IntFilter<"LibroAutor"> | number
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }, "libroId_autorId">

  export type LibroAutorOrderByWithAggregationInput = {
    libroId?: SortOrder
    autorId?: SortOrder
    _count?: LibroAutorCountOrderByAggregateInput
    _avg?: LibroAutorAvgOrderByAggregateInput
    _max?: LibroAutorMaxOrderByAggregateInput
    _min?: LibroAutorMinOrderByAggregateInput
    _sum?: LibroAutorSumOrderByAggregateInput
  }

  export type LibroAutorScalarWhereWithAggregatesInput = {
    AND?: LibroAutorScalarWhereWithAggregatesInput | LibroAutorScalarWhereWithAggregatesInput[]
    OR?: LibroAutorScalarWhereWithAggregatesInput[]
    NOT?: LibroAutorScalarWhereWithAggregatesInput | LibroAutorScalarWhereWithAggregatesInput[]
    libroId?: IntWithAggregatesFilter<"LibroAutor"> | number
    autorId?: IntWithAggregatesFilter<"LibroAutor"> | number
  }

  export type PrestamoWhereInput = {
    AND?: PrestamoWhereInput | PrestamoWhereInput[]
    OR?: PrestamoWhereInput[]
    NOT?: PrestamoWhereInput | PrestamoWhereInput[]
    id?: IntFilter<"Prestamo"> | number
    usuarioId?: IntFilter<"Prestamo"> | number
    libroId?: IntFilter<"Prestamo"> | number
    fechaPrestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fechaDevolucion?: DateTimeNullableFilter<"Prestamo"> | Date | string | null
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PrestamoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    fechaPrestamo?: SortOrder
    fechaDevolucion?: SortOrderInput | SortOrder
    libro?: LibroOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PrestamoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_libroId_fechaPrestamo?: PrestamoUsuarioIdLibroIdFechaPrestamoCompoundUniqueInput
    AND?: PrestamoWhereInput | PrestamoWhereInput[]
    OR?: PrestamoWhereInput[]
    NOT?: PrestamoWhereInput | PrestamoWhereInput[]
    usuarioId?: IntFilter<"Prestamo"> | number
    libroId?: IntFilter<"Prestamo"> | number
    fechaPrestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fechaDevolucion?: DateTimeNullableFilter<"Prestamo"> | Date | string | null
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId_libroId_fechaPrestamo">

  export type PrestamoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    fechaPrestamo?: SortOrder
    fechaDevolucion?: SortOrderInput | SortOrder
    _count?: PrestamoCountOrderByAggregateInput
    _avg?: PrestamoAvgOrderByAggregateInput
    _max?: PrestamoMaxOrderByAggregateInput
    _min?: PrestamoMinOrderByAggregateInput
    _sum?: PrestamoSumOrderByAggregateInput
  }

  export type PrestamoScalarWhereWithAggregatesInput = {
    AND?: PrestamoScalarWhereWithAggregatesInput | PrestamoScalarWhereWithAggregatesInput[]
    OR?: PrestamoScalarWhereWithAggregatesInput[]
    NOT?: PrestamoScalarWhereWithAggregatesInput | PrestamoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prestamo"> | number
    usuarioId?: IntWithAggregatesFilter<"Prestamo"> | number
    libroId?: IntWithAggregatesFilter<"Prestamo"> | number
    fechaPrestamo?: DateTimeWithAggregatesFilter<"Prestamo"> | Date | string
    fechaDevolucion?: DateTimeNullableWithAggregatesFilter<"Prestamo"> | Date | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    direccion?: string | null
    Prestamos?: PrestamoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion?: string | null
    Prestamos?: PrestamoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    Prestamos?: PrestamoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    Prestamos?: PrestamoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    direccion?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibroCreateInput = {
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    LibroAutor?: LibroAutorCreateNestedManyWithoutLibroInput
    Prestamos?: PrestamoCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateInput = {
    id?: number
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    LibroAutor?: LibroAutorUncheckedCreateNestedManyWithoutLibroInput
    Prestamos?: PrestamoUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    LibroAutor?: LibroAutorUpdateManyWithoutLibroNestedInput
    Prestamos?: PrestamoUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    LibroAutor?: LibroAutorUncheckedUpdateManyWithoutLibroNestedInput
    Prestamos?: PrestamoUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type LibroCreateManyInput = {
    id?: number
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
  }

  export type LibroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LibroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AutorCreateInput = {
    nombre: string
    LibroAutor?: LibroAutorCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nombre: string
    LibroAutor?: LibroAutorUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    LibroAutor?: LibroAutorUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    LibroAutor?: LibroAutorUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nombre: string
  }

  export type AutorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LibroAutorCreateInput = {
    autor: AutorCreateNestedOneWithoutLibroAutorInput
    libro: LibroCreateNestedOneWithoutLibroAutorInput
  }

  export type LibroAutorUncheckedCreateInput = {
    libroId: number
    autorId: number
  }

  export type LibroAutorUpdateInput = {
    autor?: AutorUpdateOneRequiredWithoutLibroAutorNestedInput
    libro?: LibroUpdateOneRequiredWithoutLibroAutorNestedInput
  }

  export type LibroAutorUncheckedUpdateInput = {
    libroId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type LibroAutorCreateManyInput = {
    libroId: number
    autorId: number
  }

  export type LibroAutorUpdateManyMutationInput = {

  }

  export type LibroAutorUncheckedUpdateManyInput = {
    libroId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestamoCreateInput = {
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
    libro: LibroCreateNestedOneWithoutPrestamosInput
    usuario: UsuarioCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    libroId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type PrestamoUpdateInput = {
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    libro?: LibroUpdateOneRequiredWithoutPrestamosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    libroId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrestamoCreateManyInput = {
    id?: number
    usuarioId: number
    libroId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type PrestamoUpdateManyMutationInput = {
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrestamoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    libroId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type PrestamoListRelationFilter = {
    every?: PrestamoWhereInput
    some?: PrestamoWhereInput
    none?: PrestamoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrestamoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LibroAutorListRelationFilter = {
    every?: LibroAutorWhereInput
    some?: LibroAutorWhereInput
    none?: LibroAutorWhereInput
  }

  export type LibroAutorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaPublicacion?: SortOrder
    disponible?: SortOrder
  }

  export type LibroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LibroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaPublicacion?: SortOrder
    disponible?: SortOrder
  }

  export type LibroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaPublicacion?: SortOrder
    disponible?: SortOrder
  }

  export type LibroSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorScalarRelationFilter = {
    is?: AutorWhereInput
    isNot?: AutorWhereInput
  }

  export type LibroScalarRelationFilter = {
    is?: LibroWhereInput
    isNot?: LibroWhereInput
  }

  export type LibroAutorLibroIdAutorIdCompoundUniqueInput = {
    libroId: number
    autorId: number
  }

  export type LibroAutorCountOrderByAggregateInput = {
    libroId?: SortOrder
    autorId?: SortOrder
  }

  export type LibroAutorAvgOrderByAggregateInput = {
    libroId?: SortOrder
    autorId?: SortOrder
  }

  export type LibroAutorMaxOrderByAggregateInput = {
    libroId?: SortOrder
    autorId?: SortOrder
  }

  export type LibroAutorMinOrderByAggregateInput = {
    libroId?: SortOrder
    autorId?: SortOrder
  }

  export type LibroAutorSumOrderByAggregateInput = {
    libroId?: SortOrder
    autorId?: SortOrder
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PrestamoUsuarioIdLibroIdFechaPrestamoCompoundUniqueInput = {
    usuarioId: number
    libroId: number
    fechaPrestamo: Date | string
  }

  export type PrestamoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    fechaPrestamo?: SortOrder
    fechaDevolucion?: SortOrder
  }

  export type PrestamoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
  }

  export type PrestamoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    fechaPrestamo?: SortOrder
    fechaDevolucion?: SortOrder
  }

  export type PrestamoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    fechaPrestamo?: SortOrder
    fechaDevolucion?: SortOrder
  }

  export type PrestamoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
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

  export type PrestamoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type PrestamoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PrestamoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutUsuarioInput | PrestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutUsuarioInput | PrestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutUsuarioInput | PrestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrestamoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutUsuarioInput | PrestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutUsuarioInput | PrestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutUsuarioInput | PrestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type LibroAutorCreateNestedManyWithoutLibroInput = {
    create?: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput> | LibroAutorCreateWithoutLibroInput[] | LibroAutorUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutLibroInput | LibroAutorCreateOrConnectWithoutLibroInput[]
    createMany?: LibroAutorCreateManyLibroInputEnvelope
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
  }

  export type PrestamoCreateNestedManyWithoutLibroInput = {
    create?: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput> | PrestamoCreateWithoutLibroInput[] | PrestamoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutLibroInput | PrestamoCreateOrConnectWithoutLibroInput[]
    createMany?: PrestamoCreateManyLibroInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type LibroAutorUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput> | LibroAutorCreateWithoutLibroInput[] | LibroAutorUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutLibroInput | LibroAutorCreateOrConnectWithoutLibroInput[]
    createMany?: LibroAutorCreateManyLibroInputEnvelope
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
  }

  export type PrestamoUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput> | PrestamoCreateWithoutLibroInput[] | PrestamoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutLibroInput | PrestamoCreateOrConnectWithoutLibroInput[]
    createMany?: PrestamoCreateManyLibroInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LibroAutorUpdateManyWithoutLibroNestedInput = {
    create?: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput> | LibroAutorCreateWithoutLibroInput[] | LibroAutorUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutLibroInput | LibroAutorCreateOrConnectWithoutLibroInput[]
    upsert?: LibroAutorUpsertWithWhereUniqueWithoutLibroInput | LibroAutorUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: LibroAutorCreateManyLibroInputEnvelope
    set?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    disconnect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    delete?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    update?: LibroAutorUpdateWithWhereUniqueWithoutLibroInput | LibroAutorUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: LibroAutorUpdateManyWithWhereWithoutLibroInput | LibroAutorUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
  }

  export type PrestamoUpdateManyWithoutLibroNestedInput = {
    create?: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput> | PrestamoCreateWithoutLibroInput[] | PrestamoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutLibroInput | PrestamoCreateOrConnectWithoutLibroInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutLibroInput | PrestamoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: PrestamoCreateManyLibroInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutLibroInput | PrestamoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutLibroInput | PrestamoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type LibroAutorUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput> | LibroAutorCreateWithoutLibroInput[] | LibroAutorUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutLibroInput | LibroAutorCreateOrConnectWithoutLibroInput[]
    upsert?: LibroAutorUpsertWithWhereUniqueWithoutLibroInput | LibroAutorUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: LibroAutorCreateManyLibroInputEnvelope
    set?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    disconnect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    delete?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    update?: LibroAutorUpdateWithWhereUniqueWithoutLibroInput | LibroAutorUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: LibroAutorUpdateManyWithWhereWithoutLibroInput | LibroAutorUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
  }

  export type PrestamoUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput> | PrestamoCreateWithoutLibroInput[] | PrestamoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutLibroInput | PrestamoCreateOrConnectWithoutLibroInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutLibroInput | PrestamoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: PrestamoCreateManyLibroInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutLibroInput | PrestamoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutLibroInput | PrestamoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type LibroAutorCreateNestedManyWithoutAutorInput = {
    create?: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput> | LibroAutorCreateWithoutAutorInput[] | LibroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutAutorInput | LibroAutorCreateOrConnectWithoutAutorInput[]
    createMany?: LibroAutorCreateManyAutorInputEnvelope
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
  }

  export type LibroAutorUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput> | LibroAutorCreateWithoutAutorInput[] | LibroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutAutorInput | LibroAutorCreateOrConnectWithoutAutorInput[]
    createMany?: LibroAutorCreateManyAutorInputEnvelope
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
  }

  export type LibroAutorUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput> | LibroAutorCreateWithoutAutorInput[] | LibroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutAutorInput | LibroAutorCreateOrConnectWithoutAutorInput[]
    upsert?: LibroAutorUpsertWithWhereUniqueWithoutAutorInput | LibroAutorUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LibroAutorCreateManyAutorInputEnvelope
    set?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    disconnect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    delete?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    update?: LibroAutorUpdateWithWhereUniqueWithoutAutorInput | LibroAutorUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LibroAutorUpdateManyWithWhereWithoutAutorInput | LibroAutorUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
  }

  export type LibroAutorUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput> | LibroAutorCreateWithoutAutorInput[] | LibroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroAutorCreateOrConnectWithoutAutorInput | LibroAutorCreateOrConnectWithoutAutorInput[]
    upsert?: LibroAutorUpsertWithWhereUniqueWithoutAutorInput | LibroAutorUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LibroAutorCreateManyAutorInputEnvelope
    set?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    disconnect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    delete?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    connect?: LibroAutorWhereUniqueInput | LibroAutorWhereUniqueInput[]
    update?: LibroAutorUpdateWithWhereUniqueWithoutAutorInput | LibroAutorUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LibroAutorUpdateManyWithWhereWithoutAutorInput | LibroAutorUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
  }

  export type AutorCreateNestedOneWithoutLibroAutorInput = {
    create?: XOR<AutorCreateWithoutLibroAutorInput, AutorUncheckedCreateWithoutLibroAutorInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLibroAutorInput
    connect?: AutorWhereUniqueInput
  }

  export type LibroCreateNestedOneWithoutLibroAutorInput = {
    create?: XOR<LibroCreateWithoutLibroAutorInput, LibroUncheckedCreateWithoutLibroAutorInput>
    connectOrCreate?: LibroCreateOrConnectWithoutLibroAutorInput
    connect?: LibroWhereUniqueInput
  }

  export type AutorUpdateOneRequiredWithoutLibroAutorNestedInput = {
    create?: XOR<AutorCreateWithoutLibroAutorInput, AutorUncheckedCreateWithoutLibroAutorInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLibroAutorInput
    upsert?: AutorUpsertWithoutLibroAutorInput
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutLibroAutorInput, AutorUpdateWithoutLibroAutorInput>, AutorUncheckedUpdateWithoutLibroAutorInput>
  }

  export type LibroUpdateOneRequiredWithoutLibroAutorNestedInput = {
    create?: XOR<LibroCreateWithoutLibroAutorInput, LibroUncheckedCreateWithoutLibroAutorInput>
    connectOrCreate?: LibroCreateOrConnectWithoutLibroAutorInput
    upsert?: LibroUpsertWithoutLibroAutorInput
    connect?: LibroWhereUniqueInput
    update?: XOR<XOR<LibroUpdateToOneWithWhereWithoutLibroAutorInput, LibroUpdateWithoutLibroAutorInput>, LibroUncheckedUpdateWithoutLibroAutorInput>
  }

  export type LibroCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<LibroCreateWithoutPrestamosInput, LibroUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: LibroCreateOrConnectWithoutPrestamosInput
    connect?: LibroWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPrestamosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LibroUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<LibroCreateWithoutPrestamosInput, LibroUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: LibroCreateOrConnectWithoutPrestamosInput
    upsert?: LibroUpsertWithoutPrestamosInput
    connect?: LibroWhereUniqueInput
    update?: XOR<XOR<LibroUpdateToOneWithWhereWithoutPrestamosInput, LibroUpdateWithoutPrestamosInput>, LibroUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPrestamosInput
    upsert?: UsuarioUpsertWithoutPrestamosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPrestamosInput, UsuarioUpdateWithoutPrestamosInput>, UsuarioUncheckedUpdateWithoutPrestamosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PrestamoCreateWithoutUsuarioInput = {
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
    libro: LibroCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    libroId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type PrestamoCreateOrConnectWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    create: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamoCreateManyUsuarioInputEnvelope = {
    data: PrestamoCreateManyUsuarioInput | PrestamoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PrestamoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    update: XOR<PrestamoUpdateWithoutUsuarioInput, PrestamoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    data: XOR<PrestamoUpdateWithoutUsuarioInput, PrestamoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PrestamoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PrestamoScalarWhereInput
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PrestamoScalarWhereInput = {
    AND?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
    OR?: PrestamoScalarWhereInput[]
    NOT?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
    id?: IntFilter<"Prestamo"> | number
    usuarioId?: IntFilter<"Prestamo"> | number
    libroId?: IntFilter<"Prestamo"> | number
    fechaPrestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fechaDevolucion?: DateTimeNullableFilter<"Prestamo"> | Date | string | null
  }

  export type LibroAutorCreateWithoutLibroInput = {
    autor: AutorCreateNestedOneWithoutLibroAutorInput
  }

  export type LibroAutorUncheckedCreateWithoutLibroInput = {
    autorId: number
  }

  export type LibroAutorCreateOrConnectWithoutLibroInput = {
    where: LibroAutorWhereUniqueInput
    create: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput>
  }

  export type LibroAutorCreateManyLibroInputEnvelope = {
    data: LibroAutorCreateManyLibroInput | LibroAutorCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type PrestamoCreateWithoutLibroInput = {
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateWithoutLibroInput = {
    id?: number
    usuarioId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type PrestamoCreateOrConnectWithoutLibroInput = {
    where: PrestamoWhereUniqueInput
    create: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput>
  }

  export type PrestamoCreateManyLibroInputEnvelope = {
    data: PrestamoCreateManyLibroInput | PrestamoCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type LibroAutorUpsertWithWhereUniqueWithoutLibroInput = {
    where: LibroAutorWhereUniqueInput
    update: XOR<LibroAutorUpdateWithoutLibroInput, LibroAutorUncheckedUpdateWithoutLibroInput>
    create: XOR<LibroAutorCreateWithoutLibroInput, LibroAutorUncheckedCreateWithoutLibroInput>
  }

  export type LibroAutorUpdateWithWhereUniqueWithoutLibroInput = {
    where: LibroAutorWhereUniqueInput
    data: XOR<LibroAutorUpdateWithoutLibroInput, LibroAutorUncheckedUpdateWithoutLibroInput>
  }

  export type LibroAutorUpdateManyWithWhereWithoutLibroInput = {
    where: LibroAutorScalarWhereInput
    data: XOR<LibroAutorUpdateManyMutationInput, LibroAutorUncheckedUpdateManyWithoutLibroInput>
  }

  export type LibroAutorScalarWhereInput = {
    AND?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
    OR?: LibroAutorScalarWhereInput[]
    NOT?: LibroAutorScalarWhereInput | LibroAutorScalarWhereInput[]
    libroId?: IntFilter<"LibroAutor"> | number
    autorId?: IntFilter<"LibroAutor"> | number
  }

  export type PrestamoUpsertWithWhereUniqueWithoutLibroInput = {
    where: PrestamoWhereUniqueInput
    update: XOR<PrestamoUpdateWithoutLibroInput, PrestamoUncheckedUpdateWithoutLibroInput>
    create: XOR<PrestamoCreateWithoutLibroInput, PrestamoUncheckedCreateWithoutLibroInput>
  }

  export type PrestamoUpdateWithWhereUniqueWithoutLibroInput = {
    where: PrestamoWhereUniqueInput
    data: XOR<PrestamoUpdateWithoutLibroInput, PrestamoUncheckedUpdateWithoutLibroInput>
  }

  export type PrestamoUpdateManyWithWhereWithoutLibroInput = {
    where: PrestamoScalarWhereInput
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyWithoutLibroInput>
  }

  export type LibroAutorCreateWithoutAutorInput = {
    libro: LibroCreateNestedOneWithoutLibroAutorInput
  }

  export type LibroAutorUncheckedCreateWithoutAutorInput = {
    libroId: number
  }

  export type LibroAutorCreateOrConnectWithoutAutorInput = {
    where: LibroAutorWhereUniqueInput
    create: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput>
  }

  export type LibroAutorCreateManyAutorInputEnvelope = {
    data: LibroAutorCreateManyAutorInput | LibroAutorCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LibroAutorUpsertWithWhereUniqueWithoutAutorInput = {
    where: LibroAutorWhereUniqueInput
    update: XOR<LibroAutorUpdateWithoutAutorInput, LibroAutorUncheckedUpdateWithoutAutorInput>
    create: XOR<LibroAutorCreateWithoutAutorInput, LibroAutorUncheckedCreateWithoutAutorInput>
  }

  export type LibroAutorUpdateWithWhereUniqueWithoutAutorInput = {
    where: LibroAutorWhereUniqueInput
    data: XOR<LibroAutorUpdateWithoutAutorInput, LibroAutorUncheckedUpdateWithoutAutorInput>
  }

  export type LibroAutorUpdateManyWithWhereWithoutAutorInput = {
    where: LibroAutorScalarWhereInput
    data: XOR<LibroAutorUpdateManyMutationInput, LibroAutorUncheckedUpdateManyWithoutAutorInput>
  }

  export type AutorCreateWithoutLibroAutorInput = {
    nombre: string
  }

  export type AutorUncheckedCreateWithoutLibroAutorInput = {
    id?: number
    nombre: string
  }

  export type AutorCreateOrConnectWithoutLibroAutorInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLibroAutorInput, AutorUncheckedCreateWithoutLibroAutorInput>
  }

  export type LibroCreateWithoutLibroAutorInput = {
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    Prestamos?: PrestamoCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutLibroAutorInput = {
    id?: number
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    Prestamos?: PrestamoUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroCreateOrConnectWithoutLibroAutorInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutLibroAutorInput, LibroUncheckedCreateWithoutLibroAutorInput>
  }

  export type AutorUpsertWithoutLibroAutorInput = {
    update: XOR<AutorUpdateWithoutLibroAutorInput, AutorUncheckedUpdateWithoutLibroAutorInput>
    create: XOR<AutorCreateWithoutLibroAutorInput, AutorUncheckedCreateWithoutLibroAutorInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutLibroAutorInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutLibroAutorInput, AutorUncheckedUpdateWithoutLibroAutorInput>
  }

  export type AutorUpdateWithoutLibroAutorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateWithoutLibroAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LibroUpsertWithoutLibroAutorInput = {
    update: XOR<LibroUpdateWithoutLibroAutorInput, LibroUncheckedUpdateWithoutLibroAutorInput>
    create: XOR<LibroCreateWithoutLibroAutorInput, LibroUncheckedCreateWithoutLibroAutorInput>
    where?: LibroWhereInput
  }

  export type LibroUpdateToOneWithWhereWithoutLibroAutorInput = {
    where?: LibroWhereInput
    data: XOR<LibroUpdateWithoutLibroAutorInput, LibroUncheckedUpdateWithoutLibroAutorInput>
  }

  export type LibroUpdateWithoutLibroAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    Prestamos?: PrestamoUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutLibroAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    Prestamos?: PrestamoUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type LibroCreateWithoutPrestamosInput = {
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    LibroAutor?: LibroAutorCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutPrestamosInput = {
    id?: number
    titulo: string
    fechaPublicacion?: Date | string | null
    disponible: boolean
    LibroAutor?: LibroAutorUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroCreateOrConnectWithoutPrestamosInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutPrestamosInput, LibroUncheckedCreateWithoutPrestamosInput>
  }

  export type UsuarioCreateWithoutPrestamosInput = {
    nombre: string
    direccion?: string | null
  }

  export type UsuarioUncheckedCreateWithoutPrestamosInput = {
    id?: number
    nombre: string
    direccion?: string | null
  }

  export type UsuarioCreateOrConnectWithoutPrestamosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
  }

  export type LibroUpsertWithoutPrestamosInput = {
    update: XOR<LibroUpdateWithoutPrestamosInput, LibroUncheckedUpdateWithoutPrestamosInput>
    create: XOR<LibroCreateWithoutPrestamosInput, LibroUncheckedCreateWithoutPrestamosInput>
    where?: LibroWhereInput
  }

  export type LibroUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: LibroWhereInput
    data: XOR<LibroUpdateWithoutPrestamosInput, LibroUncheckedUpdateWithoutPrestamosInput>
  }

  export type LibroUpdateWithoutPrestamosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    LibroAutor?: LibroAutorUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaPublicacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    LibroAutor?: LibroAutorUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type UsuarioUpsertWithoutPrestamosInput = {
    update: XOR<UsuarioUpdateWithoutPrestamosInput, UsuarioUncheckedUpdateWithoutPrestamosInput>
    create: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPrestamosInput, UsuarioUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuarioUpdateWithoutPrestamosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestamoCreateManyUsuarioInput = {
    id?: number
    libroId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type PrestamoUpdateWithoutUsuarioInput = {
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    libro?: LibroUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    libroId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrestamoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    libroId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LibroAutorCreateManyLibroInput = {
    autorId: number
  }

  export type PrestamoCreateManyLibroInput = {
    id?: number
    usuarioId: number
    fechaPrestamo: Date | string
    fechaDevolucion?: Date | string | null
  }

  export type LibroAutorUpdateWithoutLibroInput = {
    autor?: AutorUpdateOneRequiredWithoutLibroAutorNestedInput
  }

  export type LibroAutorUncheckedUpdateWithoutLibroInput = {
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type LibroAutorUncheckedUpdateManyWithoutLibroInput = {
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestamoUpdateWithoutLibroInput = {
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateWithoutLibroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrestamoUncheckedUpdateManyWithoutLibroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDevolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LibroAutorCreateManyAutorInput = {
    libroId: number
  }

  export type LibroAutorUpdateWithoutAutorInput = {
    libro?: LibroUpdateOneRequiredWithoutLibroAutorNestedInput
  }

  export type LibroAutorUncheckedUpdateWithoutAutorInput = {
    libroId?: IntFieldUpdateOperationsInput | number
  }

  export type LibroAutorUncheckedUpdateManyWithoutAutorInput = {
    libroId?: IntFieldUpdateOperationsInput | number
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