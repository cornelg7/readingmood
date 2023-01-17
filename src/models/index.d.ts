import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTestimony = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimony, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly body?: string | null;
  readonly avatar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimony = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimony, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly body?: string | null;
  readonly avatar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimony = LazyLoading extends LazyLoadingDisabled ? EagerTestimony : LazyTestimony

export declare const Testimony: (new (init: ModelInit<Testimony>) => Testimony) & {
  copyOf(source: Testimony, mutator: (draft: MutableModel<Testimony>) => MutableModel<Testimony> | void): Testimony;
}