/* eslint-disable */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any
}

export type Bucket = {
  __typename?: 'Bucket'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  /** from other table */
  user: User
}

export type Comment = {
  __typename?: 'Comment'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  contents: Array<Scalars['NonEmptyString']>
  /** nullable */
  imageUrl?: Maybe<Scalars['URL']>
  /** from other table */
  feed: Feed
  user: User
  /** from other table - nullable */
  comment?: Maybe<Comment>
}

export type Feed = {
  __typename?: 'Feed'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  rating: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  imageUrls: Array<Scalars['URL']>
  likeCount: Scalars['Int']
  commentCount: Scalars['Int']
  /** 피드에 태그된 매장 */
  store: Store
  /** 피드 작성자 */
  user: User
  /** 피드에 달린 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 피드에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  /** 피드에 태그된 메뉴 목록 */
  menus?: Maybe<Array<Menu>>
}

/** 성별 */
export enum Gender {
  Other = 'OTHER',
  Male = 'MALE',
  Female = 'FEMALE',
}

export type Menu = {
  __typename?: 'Menu'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  price: Scalars['Int']
  imageUrls: Array<Scalars['URL']>
  category: Scalars['NonEmptyString']
  storeId: Scalars['ID']
  /** 로그인한 사용자가 이 메뉴를 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 메뉴를 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  /** 이 메뉴를 판매하는 매장 */
  store: Store
  /** 메뉴에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 고유 이름 또는 이메일과 1번 해싱한 비밀번호를 전송하면 인증 토큰을 반환한다. */
  login?: Maybe<Scalars['JWT']>
  /** 인증 토큰과 같이 요청하면 로그아웃 성공 여부를 반환한다. */
  logout: Scalars['Boolean']
  /** 회원가입에 필요한 정보를 주면 성공했을 때 인증 토큰을 반환한다. */
  register?: Maybe<Scalars['JWT']>
  /** 회원탈퇴 시 사용자 정보가 모두 초기화된다. */
  unregister: Scalars['Boolean']
}

export type MutationLoginArgs = {
  uniqueNameOrEmail: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type News = {
  __typename?: 'News'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  title: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  category: Scalars['NonEmptyString']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 로그인한 사용자가 이 메뉴를 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  /** 이 소식을 올린 매장 */
  store: Store
}

/** OAuth 공급자 */
export enum Provider {
  Sobok = 'SOBOK',
  Google = 'GOOGLE',
  Naver = 'NAVER',
  Kakao = 'KAKAO',
}

export type Query = {
  __typename?: 'Query'
  /** 피드 상세 */
  feed?: Maybe<Feed>
  /** 특정 매장 피드 목록 */
  feed2?: Maybe<Array<Feed>>
  /** 특정 동네 피드 목록 */
  feed3?: Maybe<Array<Feed>>
  searchFeed?: Maybe<Array<Menu>>
  searchMenus?: Maybe<Array<Menu>>
  searchStores?: Maybe<Array<Menu>>
  menu?: Maybe<Menu>
  menu2?: Maybe<Menu>
  menus?: Maybe<Array<Menu>>
  menus2?: Maybe<Array<Menu>>
  /** 소식 상세 */
  news?: Maybe<News>
  /** 전체 매장 소식 목록 */
  news2?: Maybe<Array<News>>
  /** 특정 매장 소식 목록 */
  news3?: Maybe<Array<News>>
  /** 특정 매장 정보 */
  store?: Maybe<Store>
  /** 동네 및 카테고리별 매장 목록 */
  stores: Array<Store>
  /** 인증 토큰과 같이 요청하면 사용자 정보를 반환 */
  me: User
  /** 이메일 중복 여부 검사 */
  isEmailUnique: Scalars['Boolean']
  /** 사용자 고유 이름 중복 여부 검사 */
  isUniqueNameUnique: Scalars['Boolean']
}

export type QueryFeedArgs = {
  id: Scalars['ID']
}

export type QueryFeed2Args = {
  storeId: Scalars['ID']
}

export type QueryFeed3Args = {
  town: Scalars['ID']
}

export type QuerySearchFeedArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchMenusArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchStoresArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QueryMenuArgs = {
  id: Scalars['ID']
}

export type QueryMenu2Args = {
  storeId: Scalars['ID']
  name: Scalars['NonEmptyString']
}

export type QueryMenusArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  category?: Maybe<Scalars['NonEmptyString']>
}

export type QueryMenus2Args = {
  storeId?: Maybe<Scalars['ID']>
}

export type QueryNewsArgs = {
  id: Scalars['ID']
}

export type QueryNews3Args = {
  storeId: Scalars['ID']
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type QueryStoreArgs = {
  id: Scalars['ID']
}

export type QueryStoresArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type QueryIsEmailUniqueArgs = {
  email: Scalars['EmailAddress']
}

export type QueryIsUniqueNameUniqueArgs = {
  uniqueName: Scalars['NonEmptyString']
}

export type RegisterInput = {
  uniqueName: Scalars['NonEmptyString']
  email: Scalars['EmailAddress']
  passwordHash: Scalars['NonEmptyString']
  name: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  gender: Gender
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  imageUrl?: Maybe<Scalars['URL']>
}

export type Store = {
  __typename?: 'Store'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  town: Scalars['NonEmptyString']
  address: Scalars['NonEmptyString']
  categories: Array<Scalars['NonEmptyString']>
  takeout: Scalars['Boolean']
  /** nullable */
  tel?: Maybe<Scalars['String']>
  registrationNumber?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  imageUrls?: Maybe<Array<Scalars['URL']>>
  userId: Scalars['ID']
  /** from other table */
  isInBucket: Scalars['Boolean']
  isLiked: Scalars['Boolean']
  menus: Array<Menu>
  /** from other table - nullable */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  user?: Maybe<User>
}

export type Trend = {
  __typename?: 'Trend'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  contents: Array<Scalars['NonEmptyString']>
  /** from other table */
  user: User
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  uniqueName: Scalars['NonEmptyString']
  email: Scalars['EmailAddress']
  name: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  gender: Gender
  isEmailVerified: Scalars['Boolean']
  isStarUser: Scalars['Boolean']
  providers: Array<Provider>
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  imageUrl?: Maybe<Scalars['URL']>
  /** 내가 쓴 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 내가 쓴 피드 */
  feed?: Maybe<Array<Feed>>
  /** 사용자가 따르고 있는 다른 사용자 */
  followings?: Maybe<Array<User>>
  /** 사용자를 따르는 다른 사용자 */
  followers?: Maybe<Array<User>>
  /** 좋아요 누른 댓글 */
  likedComments?: Maybe<Array<Comment>>
  /** 좋아요 누른 피드 */
  likedFeed?: Maybe<Array<Feed>>
  /** 좋아요 누른 메뉴 */
  likedMenus?: Maybe<Array<Menu>>
  /** 좋아요 누른 소식 */
  likedNews?: Maybe<Array<News>>
  /** 좋아요 누른 매장 */
  likedStores?: Maybe<Array<Store>>
  /** 좋아요 누른 트렌드 */
  likedTrends?: Maybe<Array<Trend>>
  /** 내 메뉴 버킷 리스트 */
  menuBuckets?: Maybe<Array<Bucket>>
  /** 내 매장 버킷 리스트 */
  storeBuckets?: Maybe<Array<Bucket>>
}

export type IsEmailUniqueQueryVariables = Exact<{
  email: Scalars['EmailAddress']
}>

export type IsEmailUniqueQuery = { __typename?: 'Query'; isEmailUnique: boolean }

export type IsIdUniqueQueryVariables = Exact<{
  id: Scalars['NonEmptyString']
}>

export type IsIdUniqueQuery = { __typename?: 'Query'; isUniqueNameUnique: boolean }

export type StoreQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreQuery = {
  __typename?: 'Query'
  store?: Maybe<{
    __typename?: 'Store'
    id: string
    name: any
    description?: Maybe<string>
    imageUrls?: Maybe<Array<any>>
    isLiked: boolean
  }>
}

export type StoreDetailQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreDetailQuery = {
  __typename?: 'Query'
  store?: Maybe<{
    __typename?: 'Store'
    id: string
    tel?: Maybe<string>
    address: any
    registrationNumber?: Maybe<string>
    businessHours?: Maybe<Array<any>>
    holidays?: Maybe<Array<any>>
    categories: Array<any>
    hashtags?: Maybe<Array<any>>
  }>
}

export type StoreFeedQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreFeedQuery = {
  __typename?: 'Query'
  feed2?: Maybe<
    Array<{ __typename?: 'Feed'; id: string; contents: Array<any>; imageUrls: Array<any> }>
  >
}

export type StoreMenusQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreMenusQuery = {
  __typename?: 'Query'
  menus2?: Maybe<
    Array<{
      __typename?: 'Menu'
      id: string
      name: any
      price: number
      imageUrls: Array<any>
      hashtags?: Maybe<Array<any>>
    }>
  >
}

export type StoreNewsQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreNewsQuery = {
  __typename?: 'Query'
  news3?: Maybe<
    Array<{
      __typename?: 'News'
      id: string
      creationTime: any
      contents: Array<any>
      category: any
      imageUrls?: Maybe<Array<any>>
    }>
  >
}

export const IsEmailUniqueDocument = gql`
  query IsEmailUnique($email: EmailAddress!) {
    isEmailUnique(email: $email)
  }
`

/**
 * __useIsEmailUniqueQuery__
 *
 * To run a query within a React component, call `useIsEmailUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsEmailUniqueQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIsEmailUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export function useIsEmailUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export type IsEmailUniqueQueryHookResult = ReturnType<typeof useIsEmailUniqueQuery>
export type IsEmailUniqueLazyQueryHookResult = ReturnType<typeof useIsEmailUniqueLazyQuery>
export type IsEmailUniqueQueryResult = Apollo.QueryResult<
  IsEmailUniqueQuery,
  IsEmailUniqueQueryVariables
>
export const IsIdUniqueDocument = gql`
  query IsIdUnique($id: NonEmptyString!) {
    isUniqueNameUnique(uniqueName: $id)
  }
`

/**
 * __useIsIdUniqueQuery__
 *
 * To run a query within a React component, call `useIsIdUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsIdUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsIdUniqueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIsIdUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsIdUniqueQuery, IsIdUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsIdUniqueQuery, IsIdUniqueQueryVariables>(IsIdUniqueDocument, options)
}
export function useIsIdUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsIdUniqueQuery, IsIdUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsIdUniqueQuery, IsIdUniqueQueryVariables>(IsIdUniqueDocument, options)
}
export type IsIdUniqueQueryHookResult = ReturnType<typeof useIsIdUniqueQuery>
export type IsIdUniqueLazyQueryHookResult = ReturnType<typeof useIsIdUniqueLazyQuery>
export type IsIdUniqueQueryResult = Apollo.QueryResult<IsIdUniqueQuery, IsIdUniqueQueryVariables>
export const StoreDocument = gql`
  query Store($storeId: ID!) {
    store(id: $storeId) {
      id
      name
      description
      imageUrls
      isLiked
    }
  }
`

/**
 * __useStoreQuery__
 *
 * To run a query within a React component, call `useStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreQuery(
  baseOptions: Apollo.QueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export function useStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export type StoreQueryHookResult = ReturnType<typeof useStoreQuery>
export type StoreLazyQueryHookResult = ReturnType<typeof useStoreLazyQuery>
export type StoreQueryResult = Apollo.QueryResult<StoreQuery, StoreQueryVariables>
export const StoreDetailDocument = gql`
  query StoreDetail($storeId: ID!) {
    store(id: $storeId) {
      id
      tel
      address
      registrationNumber
      businessHours
      holidays
      categories
      hashtags
    }
  }
`

/**
 * __useStoreDetailQuery__
 *
 * To run a query within a React component, call `useStoreDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreDetailQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreDetailQuery(
  baseOptions: Apollo.QueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreDetailQuery, StoreDetailQueryVariables>(StoreDetailDocument, options)
}
export function useStoreDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreDetailQuery, StoreDetailQueryVariables>(
    StoreDetailDocument,
    options
  )
}
export type StoreDetailQueryHookResult = ReturnType<typeof useStoreDetailQuery>
export type StoreDetailLazyQueryHookResult = ReturnType<typeof useStoreDetailLazyQuery>
export type StoreDetailQueryResult = Apollo.QueryResult<StoreDetailQuery, StoreDetailQueryVariables>
export const StoreFeedDocument = gql`
  query StoreFeed($storeId: ID!) {
    feed2(storeId: $storeId) {
      id
      contents
      imageUrls
    }
  }
`

/**
 * __useStoreFeedQuery__
 *
 * To run a query within a React component, call `useStoreFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreFeedQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreFeedQuery(
  baseOptions: Apollo.QueryHookOptions<StoreFeedQuery, StoreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreFeedQuery, StoreFeedQueryVariables>(StoreFeedDocument, options)
}
export function useStoreFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreFeedQuery, StoreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreFeedQuery, StoreFeedQueryVariables>(StoreFeedDocument, options)
}
export type StoreFeedQueryHookResult = ReturnType<typeof useStoreFeedQuery>
export type StoreFeedLazyQueryHookResult = ReturnType<typeof useStoreFeedLazyQuery>
export type StoreFeedQueryResult = Apollo.QueryResult<StoreFeedQuery, StoreFeedQueryVariables>
export const StoreMenusDocument = gql`
  query StoreMenus($storeId: ID!) {
    menus2(storeId: $storeId) {
      id
      name
      price
      imageUrls
      hashtags
    }
  }
`

/**
 * __useStoreMenusQuery__
 *
 * To run a query within a React component, call `useStoreMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreMenusQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreMenusQuery(
  baseOptions: Apollo.QueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export function useStoreMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export type StoreMenusQueryHookResult = ReturnType<typeof useStoreMenusQuery>
export type StoreMenusLazyQueryHookResult = ReturnType<typeof useStoreMenusLazyQuery>
export type StoreMenusQueryResult = Apollo.QueryResult<StoreMenusQuery, StoreMenusQueryVariables>
export const StoreNewsDocument = gql`
  query StoreNews($storeId: ID!) {
    news3(storeId: $storeId) {
      id
      creationTime
      contents
      category
      imageUrls
    }
  }
`

/**
 * __useStoreNewsQuery__
 *
 * To run a query within a React component, call `useStoreNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreNewsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreNewsQuery(
  baseOptions: Apollo.QueryHookOptions<StoreNewsQuery, StoreNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreNewsQuery, StoreNewsQueryVariables>(StoreNewsDocument, options)
}
export function useStoreNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreNewsQuery, StoreNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreNewsQuery, StoreNewsQueryVariables>(StoreNewsDocument, options)
}
export type StoreNewsQueryHookResult = ReturnType<typeof useStoreNewsQuery>
export type StoreNewsLazyQueryHookResult = ReturnType<typeof useStoreNewsLazyQuery>
export type StoreNewsQueryResult = Apollo.QueryResult<StoreNewsQuery, StoreNewsQueryVariables>