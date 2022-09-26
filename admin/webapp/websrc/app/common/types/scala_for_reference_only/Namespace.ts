// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface Namespace {
  name: string;
  workloads: number;
  running_workloads: number;
  running_pods: number;
  services: number;
  tags: Array;
}

export function isNamespace(v: any): v is Namespace {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['workloads']) === 'number') &&
    ((typeof v['running_workloads']) === 'number') &&
    ((typeof v['running_pods']) === 'number') &&
    ((typeof v['services']) === 'number') &&
    (v['tags'] && isArray(v['tags']))
  );
}