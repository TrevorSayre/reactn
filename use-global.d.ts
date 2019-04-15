import { State } from '../default';
import GlobalStateManager, { NewGlobalState } from './global-state-manager';
import Callback from './typings/callback';
export declare type GlobalTuple<GS> = [GS, (newGlobalState: NewGlobalState<GS>, callback?: Callback<GS>) => Promise<GS>];
declare type Setter<G extends {}, P extends keyof G> = (newValue: G[P], callback?: Callback<G>) => Promise<G>;
export declare type StateTuple<G extends {}, P extends keyof G> = [G[P], Setter<G, P>];
export declare type UseGlobal<G extends {}, Property extends keyof G> = GlobalTuple<G> | StateTuple<G, Property>;
export default function useGlobal<G extends {} = State>(overrideGlobalStateManager: GlobalStateManager<G> | null): GlobalTuple<G>;
export default function useGlobal<G extends {} = State, Property extends keyof G = keyof G>(overrideGlobalStateManager: GlobalStateManager<G> | null, property: Property): StateTuple<G, Property>;
export {};
