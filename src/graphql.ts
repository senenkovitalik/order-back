import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthData = {
  __typename?: 'AuthData';
  token: Scalars['String']['output'];
};

export type CreateEmployeeInput = {
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  unitId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateUnitInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Employee = {
  __typename?: 'Employee';
  contactInfo?: Maybe<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  unit: Unit;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee: Employee;
  createUnit: Unit;
  deleteEmployee: Employee;
  deleteUnit: Unit;
  updateEmployee: Employee;
  updateUnit: Unit;
};


export type MutationCreateEmployeeArgs = {
  employeePayload: CreateEmployeeInput;
};


export type MutationCreateUnitArgs = {
  unitPayload: CreateUnitInput;
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUnitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEmployeeArgs = {
  employeePayload: UpdateEmployeeInput;
};


export type MutationUpdateUnitArgs = {
  unitPayload: UpdateUnitInput;
};

export type Query = {
  __typename?: 'Query';
  employee?: Maybe<Employee>;
  employees: Array<Employee>;
  login: AuthData;
  units: Array<Unit>;
};


export type QueryEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Unit = {
  __typename?: 'Unit';
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type UpdateEmployeeInput = {
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  unitId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUnitInput = {
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  employee?: Maybe<Employee>;
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthData: ResolverTypeWrapper<AuthData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateEmployeeInput: CreateEmployeeInput;
  CreateUnitInput: CreateUnitInput;
  Employee: ResolverTypeWrapper<Employee>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Unit: ResolverTypeWrapper<Unit>;
  UpdateEmployeeInput: UpdateEmployeeInput;
  UpdateUnitInput: UpdateUnitInput;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthData: AuthData;
  Boolean: Scalars['Boolean']['output'];
  CreateEmployeeInput: CreateEmployeeInput;
  CreateUnitInput: CreateUnitInput;
  Employee: Employee;
  ID: Scalars['ID']['output'];
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  Unit: Unit;
  UpdateEmployeeInput: UpdateEmployeeInput;
  UpdateUnitInput: UpdateUnitInput;
  User: User;
}>;

export type AuthDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AuthData'] = ResolversParentTypes['AuthData']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type EmployeeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  contactInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'employeePayload'>>;
  createUnit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType, RequireFields<MutationCreateUnitArgs, 'unitPayload'>>;
  deleteEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationDeleteEmployeeArgs, 'id'>>;
  deleteUnit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType, RequireFields<MutationDeleteUnitArgs, 'id'>>;
  updateEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'employeePayload'>>;
  updateUnit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType, RequireFields<MutationUpdateUnitArgs, 'unitPayload'>>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeArgs, 'id'>>;
  employees?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType>;
  login?: Resolver<ResolversTypes['AuthData'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'password' | 'username'>>;
  units?: Resolver<Array<ResolversTypes['Unit']>, ParentType, ContextType>;
}>;

export type UnitResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  AuthData?: AuthDataResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

