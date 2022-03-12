import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Academics = {
  __typename?: 'Academics';
  board: Scalars['String'];
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  school: Scalars['String'];
  score: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  yearOfCompletion: Scalars['String'];
};

export type AcademicsInput = {
  board: Scalars['String'];
  country: Scalars['String'];
  school: Scalars['String'];
  score: Scalars['Float'];
  yearOfCompletion: Scalars['String'];
};

export type Branch = {
  __typename?: 'Branch';
  abbreviation: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Category {
  Core = 'CORE',
  Ites = 'ITES'
}

export type Company = {
  __typename?: 'Company';
  aboutCompany?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  jobs?: Maybe<Array<Maybe<Job>>>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyPreference = {
  __typename?: 'CompanyPreference';
  company: Company;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  preference: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateNewJobInput = {
  bond?: InputMaybe<Scalars['String']>;
  category: Category;
  companyID: Scalars['String'];
  ctc?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  eligibility: EligibilityInput;
  hasBond: Scalars['Boolean'];
  hrContact: Scalars['String'];
  isSpot: Scalars['Boolean'];
  locations: Array<Scalars['String']>;
  offerType: OfferType;
  profile: Scalars['String'];
  registrationDeadline: Scalars['DateTime'];
  registrationStartDate: Scalars['DateTime'];
  stipend?: InputMaybe<Scalars['Int']>;
};

export type CreateUserInput = {
  branchID: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  student?: InputMaybe<StudentInput>;
  userType: UserType;
};

export type Education = {
  __typename?: 'Education';
  createdAt?: Maybe<Scalars['DateTime']>;
  diploma?: Maybe<Academics>;
  id: Scalars['String'];
  jeeAdvancedRank?: Maybe<Scalars['String']>;
  jeeMainRank?: Maybe<Scalars['String']>;
  metRank?: Maybe<Scalars['String']>;
  semesters: Array<Maybe<Semester>>;
  tenth: Academics;
  twefth?: Maybe<Academics>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EducationInput = {
  diploma?: InputMaybe<AcademicsInput>;
  jeeAdvancedRank?: InputMaybe<Scalars['String']>;
  jeeMainRank?: InputMaybe<Scalars['String']>;
  metRank?: InputMaybe<Scalars['String']>;
  semesters: Array<SemesterInput>;
  tenth?: InputMaybe<AcademicsInput>;
  twefth?: InputMaybe<AcademicsInput>;
};

export type Eligibility = {
  __typename?: 'Eligibility';
  additionalRequirement?: Maybe<Scalars['String']>;
  branches: Array<Maybe<Branch>>;
  cgpa?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  diplomaScore?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  numberOfBacklogs?: Maybe<Scalars['Int']>;
  tenthScore?: Maybe<Scalars['Float']>;
  twelfthScore?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EligibilityInput = {
  additionalRequirement?: InputMaybe<Scalars['String']>;
  branchIDs: Array<Scalars['String']>;
  cgpa?: InputMaybe<Scalars['Float']>;
  diplomaScore?: InputMaybe<Scalars['Float']>;
  numberOfBacklogs?: InputMaybe<Scalars['Int']>;
  tenthScore?: InputMaybe<Scalars['Float']>;
  twelfthScore?: InputMaybe<Scalars['Float']>;
};

export type EligibilityUpdateInput = {
  additionalRequirement?: InputMaybe<Scalars['String']>;
  branchIDs?: InputMaybe<Array<Scalars['String']>>;
  cgpa?: InputMaybe<Scalars['Float']>;
  diplomaScore?: InputMaybe<Scalars['Float']>;
  numberOfBacklogs?: InputMaybe<Scalars['Int']>;
  tenthScore?: InputMaybe<Scalars['Float']>;
  twelfthScore?: InputMaybe<Scalars['Float']>;
};

export type Identification = {
  __typename?: 'Identification';
  aadharNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  panNumber?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IdentificationInput = {
  aadharNumber?: InputMaybe<Scalars['String']>;
  panNumber?: InputMaybe<Scalars['String']>;
  passportNumber?: InputMaybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  bond?: Maybe<Scalars['String']>;
  category: Category;
  company: Company;
  createdAt?: Maybe<Scalars['DateTime']>;
  ctc?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  eligibility: Eligibility;
  hasBond: Scalars['Boolean'];
  hrContact: Scalars['String'];
  id: Scalars['String'];
  isSpot: Scalars['Boolean'];
  locations: Array<Scalars['String']>;
  offerType: OfferType;
  profile: Scalars['String'];
  registrationDeadline: Scalars['DateTime'];
  registrationStartDate: Scalars['DateTime'];
  shorlists?: Maybe<Array<Maybe<Shortlist>>>;
  stipend?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobsDashboard = {
  __typename?: 'JobsDashboard';
  category: Category;
  company: Company;
  createdAt?: Maybe<Scalars['DateTime']>;
  ctc?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isSpot: Scalars['Boolean'];
  locations: Array<Scalars['String']>;
  offerType: OfferType;
  profile: Scalars['String'];
  registrationDeadline: Scalars['DateTime'];
  registrationStartDate: Scalars['DateTime'];
  stipend?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewJob: Job;
  createUser: User;
  deleteJob: Job;
  updateJob: Job;
};


export type MutationCreateNewJobArgs = {
  createNewJobInput: CreateNewJobInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteJobArgs = {
  jobID: Scalars['String'];
};


export type MutationUpdateJobArgs = {
  updateJobInput: UpdateJobInput;
};

export enum OfferType {
  I = 'I',
  P = 'P',
  PPlusI = 'P_PLUS_I'
}

export type Parent = {
  __typename?: 'Parent';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  occupation: Scalars['String'];
  organization?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ParentInput = {
  name: Scalars['String'];
  occupation: Scalars['String'];
  organization?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllJobs: Array<Maybe<JobsDashboard>>;
  getJobDetails?: Maybe<Job>;
};


export type QueryGetJobDetailsArgs = {
  jobID: Scalars['String'];
};

export type Semester = {
  __typename?: 'Semester';
  backlogs: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  credits: Scalars['Int'];
  dateChanges: Scalars['Int'];
  gpa: Scalars['Float'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SemesterInput = {
  backlogs: Scalars['Int'];
  credits: Scalars['Int'];
  dateChanges: Scalars['Int'];
  gpa: Scalars['Float'];
  name: Scalars['String'];
};

export type Shortlist = {
  __typename?: 'Shortlist';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  step: Step;
  students: Array<Maybe<Student>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Step {
  Eligibility = 'ELIGIBILITY',
  Interview = 'INTERVIEW',
  OnlineTestI = 'ONLINE_TEST_I',
  OnlineTestIi = 'ONLINE_TEST_II',
  Registration = 'REGISTRATION',
  Selected = 'SELECTED'
}

export type Student = {
  __typename?: 'Student';
  altEmail: Scalars['String'];
  altPhoneNumber: Scalars['String'];
  city: Scalars['String'];
  companyPreferences?: Maybe<Array<Maybe<CompanyPreference>>>;
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  currentAddress: Scalars['String'];
  currentOffers?: Maybe<Array<Maybe<Job>>>;
  dateOfBirth: Scalars['DateTime'];
  education: Education;
  father?: Maybe<Parent>;
  firstName: Scalars['String'];
  guardian?: Maybe<Parent>;
  height: Scalars['String'];
  identification: Identification;
  lastName: Scalars['String'];
  linkedinID: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  mother?: Maybe<Parent>;
  permanentAddress: Scalars['String'];
  phoneNumber: Scalars['String'];
  physicalDisability?: Maybe<Scalars['String']>;
  preferredCompany?: Maybe<Scalars['String']>;
  regNo: Scalars['String'];
  shortlists?: Maybe<Array<Maybe<Shortlist>>>;
  skypeID: Scalars['String'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  weight: Scalars['String'];
};

export type StudentInput = {
  altEmail: Scalars['String'];
  altPhoneNumber: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  currentAddress: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  education: EducationInput;
  father?: InputMaybe<ParentInput>;
  firstName: Scalars['String'];
  guardian?: InputMaybe<ParentInput>;
  height: Scalars['String'];
  identification: IdentificationInput;
  lastName: Scalars['String'];
  linkedinID: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
  mother?: InputMaybe<ParentInput>;
  permanentAddress: Scalars['String'];
  phoneNumber: Scalars['String'];
  physicalDisability?: InputMaybe<Scalars['String']>;
  regNo: Scalars['String'];
  skypeID: Scalars['String'];
  state: Scalars['String'];
  weight: Scalars['String'];
};

export type UpdateJobInput = {
  bond?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category>;
  ctc?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  eligibility?: InputMaybe<EligibilityUpdateInput>;
  hasBond?: InputMaybe<Scalars['Boolean']>;
  hrContact?: InputMaybe<Scalars['String']>;
  isSpot?: InputMaybe<Scalars['Boolean']>;
  jobID: Scalars['String'];
  locations?: InputMaybe<Array<Scalars['String']>>;
  offerType?: InputMaybe<OfferType>;
  profile?: InputMaybe<Scalars['String']>;
  registrationDeadline?: InputMaybe<Scalars['DateTime']>;
  registrationStartDate?: InputMaybe<Scalars['DateTime']>;
  stipend?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  branch: Branch;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userType: UserType;
};

export enum UserType {
  Department = 'DEPARTMENT',
  Placement = 'PLACEMENT',
  Student = 'STUDENT'
}

export type GetAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobsQuery = { __typename?: 'Query', getAllJobs: Array<{ __typename?: 'JobsDashboard', id: string, profile: string, category: Category, locations: Array<string>, ctc?: number | null | undefined, stipend?: number | null | undefined, registrationStartDate: any, registrationDeadline: any, offerType: OfferType, isSpot: boolean, company: { __typename?: 'Company', name: string, logo?: string | null | undefined, id: string } } | null | undefined> };


export const GetAllJobsDocument = gql`
    query GetAllJobs {
  getAllJobs {
    id
    company {
      name
      logo
      id
    }
    profile
    category
    locations
    ctc
    stipend
    registrationStartDate
    registrationDeadline
    offerType
    isSpot
  }
}
    `;

/**
 * __useGetAllJobsQuery__
 *
 * To run a query within a React component, call `useGetAllJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllJobsQuery, GetAllJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, options);
      }
export function useGetAllJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllJobsQuery, GetAllJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, options);
        }
export type GetAllJobsQueryHookResult = ReturnType<typeof useGetAllJobsQuery>;
export type GetAllJobsLazyQueryHookResult = ReturnType<typeof useGetAllJobsLazyQuery>;
export type GetAllJobsQueryResult = Apollo.QueryResult<GetAllJobsQuery, GetAllJobsQueryVariables>;