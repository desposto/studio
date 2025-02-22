/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace AuriLens {
  export type AuTokenBalancesStruct = {
    auToken: string;
    balanceOf: BigNumberish;
    borrowBalanceCurrent: BigNumberish;
    balanceOfUnderlying: BigNumberish;
    tokenBalance: BigNumberish;
    tokenAllowance: BigNumberish;
  };

  export type AuTokenBalancesStructOutput = [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    auToken: string;
    balanceOf: BigNumber;
    borrowBalanceCurrent: BigNumber;
    balanceOfUnderlying: BigNumber;
    tokenBalance: BigNumber;
    tokenAllowance: BigNumber;
  };

  export type AuTokenMetadataStruct = {
    auToken: string;
    exchangeRateCurrent: BigNumberish;
    supplyRatePerBlock: BigNumberish;
    borrowRatePerBlock: BigNumberish;
    reserveFactorMantissa: BigNumberish;
    totalBorrows: BigNumberish;
    totalReserves: BigNumberish;
    totalSupply: BigNumberish;
    totalCash: BigNumberish;
    isListed: boolean;
    collateralFactorMantissa: BigNumberish;
    underlyingAssetAddress: string;
    auTokenDecimals: BigNumberish;
    underlyingDecimals: BigNumberish;
    plyRewardSupplySpeed: BigNumberish;
    plyRewardBorrowSpeed: BigNumberish;
    auroraRewardSupplySpeed: BigNumberish;
    auroraRewardBorrowSpeed: BigNumberish;
    borrowCap: BigNumberish;
  };

  export type AuTokenMetadataStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    auToken: string;
    exchangeRateCurrent: BigNumber;
    supplyRatePerBlock: BigNumber;
    borrowRatePerBlock: BigNumber;
    reserveFactorMantissa: BigNumber;
    totalBorrows: BigNumber;
    totalReserves: BigNumber;
    totalSupply: BigNumber;
    totalCash: BigNumber;
    isListed: boolean;
    collateralFactorMantissa: BigNumber;
    underlyingAssetAddress: string;
    auTokenDecimals: BigNumber;
    underlyingDecimals: BigNumber;
    plyRewardSupplySpeed: BigNumber;
    plyRewardBorrowSpeed: BigNumber;
    auroraRewardSupplySpeed: BigNumber;
    auroraRewardBorrowSpeed: BigNumber;
    borrowCap: BigNumber;
  };

  export type AuTokenUnderlyingPriceStruct = {
    auToken: string;
    underlyingPrice: BigNumberish;
  };

  export type AuTokenUnderlyingPriceStructOutput = [string, BigNumber] & {
    auToken: string;
    underlyingPrice: BigNumber;
  };

  export type RewardBalancesMetadataStruct = {
    plyAccrured: BigNumberish;
    auroraClaimable: BigNumberish;
    wnearClaimable: BigNumberish;
  };

  export type RewardBalancesMetadataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    plyAccrured: BigNumber;
    auroraClaimable: BigNumber;
    wnearClaimable: BigNumber;
  };

  export type AccountLimitsStruct = {
    markets: string[];
    liquidity: BigNumberish;
    shortfall: BigNumberish;
  };

  export type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
    markets: string[];
    liquidity: BigNumber;
    shortfall: BigNumber;
  };

  export type RewardSpeedsStruct = {
    plyRewardSupplySpeed: BigNumberish;
    plyRewardBorrowSpeed: BigNumberish;
    auroraRewardSupplySpeed: BigNumberish;
    auroraRewardBorrowSpeed: BigNumberish;
  };

  export type RewardSpeedsStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
    plyRewardSupplySpeed: BigNumber;
    plyRewardBorrowSpeed: BigNumber;
    auroraRewardSupplySpeed: BigNumber;
    auroraRewardBorrowSpeed: BigNumber;
  };
}

export interface AuLensInterface extends utils.Interface {
  functions: {
    'WNEAR()': FunctionFragment;
    'auTokenBalances(address)': FunctionFragment;
    'auTokenBalancesAll(address[])': FunctionFragment;
    'auTokenMetadataAllNonView(address[])': FunctionFragment;
    'auTokenMetadataNonView(address)': FunctionFragment;
    'auTokenUnderlyingPrice(address)': FunctionFragment;
    'auTokenUnderlyingPriceAll(address[])': FunctionFragment;
    'claimOwnership()': FunctionFragment;
    'claimRewards(address,address,uint256[])': FunctionFragment;
    'getAccountLimits(address)': FunctionFragment;
    'getAddresses(address)': FunctionFragment;
    'getPercentLock(address,address,int256)': FunctionFragment;
    'getRewardSpeeds(address,address)': FunctionFragment;
    'getWeekToUnlock(address,address,uint256)': FunctionFragment;
    'initialize()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingOwner()': FunctionFragment;
    'proxiableUUID()': FunctionFragment;
    'transferOwnership(address,bool,bool)': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'WNEAR'
      | 'auTokenBalances'
      | 'auTokenBalancesAll'
      | 'auTokenMetadataAllNonView'
      | 'auTokenMetadataNonView'
      | 'auTokenUnderlyingPrice'
      | 'auTokenUnderlyingPriceAll'
      | 'claimOwnership'
      | 'claimRewards'
      | 'getAccountLimits'
      | 'getAddresses'
      | 'getPercentLock'
      | 'getRewardSpeeds'
      | 'getWeekToUnlock'
      | 'initialize'
      | 'owner'
      | 'pendingOwner'
      | 'proxiableUUID'
      | 'transferOwnership'
      | 'upgradeTo'
      | 'upgradeToAndCall',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'WNEAR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'auTokenBalances', values: [string]): string;
  encodeFunctionData(functionFragment: 'auTokenBalancesAll', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'auTokenMetadataAllNonView', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'auTokenMetadataNonView', values: [string]): string;
  encodeFunctionData(functionFragment: 'auTokenUnderlyingPrice', values: [string]): string;
  encodeFunctionData(functionFragment: 'auTokenUnderlyingPriceAll', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'claimOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimRewards', values: [string, string, BigNumberish[]]): string;
  encodeFunctionData(functionFragment: 'getAccountLimits', values: [string]): string;
  encodeFunctionData(functionFragment: 'getAddresses', values: [string]): string;
  encodeFunctionData(functionFragment: 'getPercentLock', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getRewardSpeeds', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getWeekToUnlock', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'initialize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string, boolean, boolean]): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeToAndCall', values: [string, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'WNEAR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenBalancesAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenMetadataAllNonView', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenMetadataNonView', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenUnderlyingPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auTokenUnderlyingPriceAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountLimits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPercentLock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardSpeeds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWeekToUnlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'BeaconUpgraded(address)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Upgraded(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface AuLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WNEAR(overrides?: CallOverrides): Promise<[string]>;

    auTokenBalances(
      auToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    auTokenBalancesAll(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    auTokenMetadataAllNonView(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    auTokenMetadataNonView(
      auToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    auTokenUnderlyingPrice(
      auToken: string,
      overrides?: CallOverrides,
    ): Promise<[AuriLens.AuTokenUnderlyingPriceStructOutput]>;

    auTokenUnderlyingPriceAll(
      auTokens: string[],
      overrides?: CallOverrides,
    ): Promise<[AuriLens.AuTokenUnderlyingPriceStructOutput[]]>;

    claimOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    claimRewards(
      comptroller: string,
      fairLaunch: string,
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAccountLimits(comptroller: string, overrides?: CallOverrides): Promise<[AuriLens.AccountLimitsStructOutput]>;

    getAddresses(
      comptroller: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string] & {
        ply: string;
        aurora: string;
        wnear: string;
        pulp: string;
      }
    >;

    getPercentLock(
      pulp: string,
      account: string,
      weekInt: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { percentLock: BigNumber }>;

    getRewardSpeeds(
      comptroller: string,
      auToken: string,
      overrides?: CallOverrides,
    ): Promise<
      [AuriLens.RewardSpeedsStructOutput] & {
        rewardSpeeds: AuriLens.RewardSpeedsStructOutput;
      }
    >;

    getWeekToUnlock(
      pulp: string,
      account: string,
      targetUnlockPercent: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  WNEAR(overrides?: CallOverrides): Promise<string>;

  auTokenBalances(
    auToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  auTokenBalancesAll(
    auTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  auTokenMetadataAllNonView(
    auTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  auTokenMetadataNonView(
    auToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  auTokenUnderlyingPrice(
    auToken: string,
    overrides?: CallOverrides,
  ): Promise<AuriLens.AuTokenUnderlyingPriceStructOutput>;

  auTokenUnderlyingPriceAll(
    auTokens: string[],
    overrides?: CallOverrides,
  ): Promise<AuriLens.AuTokenUnderlyingPriceStructOutput[]>;

  claimOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  claimRewards(
    comptroller: string,
    fairLaunch: string,
    pids: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAccountLimits(comptroller: string, overrides?: CallOverrides): Promise<AuriLens.AccountLimitsStructOutput>;

  getAddresses(
    comptroller: string,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, string] & {
      ply: string;
      aurora: string;
      wnear: string;
      pulp: string;
    }
  >;

  getPercentLock(pulp: string, account: string, weekInt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getRewardSpeeds(
    comptroller: string,
    auToken: string,
    overrides?: CallOverrides,
  ): Promise<AuriLens.RewardSpeedsStructOutput>;

  getWeekToUnlock(
    pulp: string,
    account: string,
    targetUnlockPercent: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    WNEAR(overrides?: CallOverrides): Promise<string>;

    auTokenBalances(auToken: string, overrides?: CallOverrides): Promise<AuriLens.AuTokenBalancesStructOutput>;

    auTokenBalancesAll(auTokens: string[], overrides?: CallOverrides): Promise<AuriLens.AuTokenBalancesStructOutput[]>;

    auTokenMetadataAllNonView(
      auTokens: string[],
      overrides?: CallOverrides,
    ): Promise<AuriLens.AuTokenMetadataStructOutput[]>;

    auTokenMetadataNonView(auToken: string, overrides?: CallOverrides): Promise<AuriLens.AuTokenMetadataStructOutput>;

    auTokenUnderlyingPrice(
      auToken: string,
      overrides?: CallOverrides,
    ): Promise<AuriLens.AuTokenUnderlyingPriceStructOutput>;

    auTokenUnderlyingPriceAll(
      auTokens: string[],
      overrides?: CallOverrides,
    ): Promise<AuriLens.AuTokenUnderlyingPriceStructOutput[]>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    claimRewards(
      comptroller: string,
      fairLaunch: string,
      pids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<AuriLens.RewardBalancesMetadataStructOutput>;

    getAccountLimits(comptroller: string, overrides?: CallOverrides): Promise<AuriLens.AccountLimitsStructOutput>;

    getAddresses(
      comptroller: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string] & {
        ply: string;
        aurora: string;
        wnear: string;
        pulp: string;
      }
    >;

    getPercentLock(pulp: string, account: string, weekInt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardSpeeds(
      comptroller: string,
      auToken: string,
      overrides?: CallOverrides,
    ): Promise<AuriLens.RewardSpeedsStructOutput>;

    getWeekToUnlock(
      pulp: string,
      account: string,
      targetUnlockPercent: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: string, direct: boolean, renounce: boolean, overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
    AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

    'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    WNEAR(overrides?: CallOverrides): Promise<BigNumber>;

    auTokenBalances(auToken: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    auTokenBalancesAll(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    auTokenMetadataAllNonView(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    auTokenMetadataNonView(
      auToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    auTokenUnderlyingPrice(auToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    auTokenUnderlyingPriceAll(auTokens: string[], overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    claimRewards(
      comptroller: string,
      fairLaunch: string,
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAccountLimits(comptroller: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAddresses(comptroller: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPercentLock(pulp: string, account: string, weekInt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardSpeeds(comptroller: string, auToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getWeekToUnlock(
      pulp: string,
      account: string,
      targetUnlockPercent: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WNEAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auTokenBalances(
      auToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    auTokenBalancesAll(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    auTokenMetadataAllNonView(
      auTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    auTokenMetadataNonView(
      auToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    auTokenUnderlyingPrice(auToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auTokenUnderlyingPriceAll(auTokens: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    claimRewards(
      comptroller: string,
      fairLaunch: string,
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAccountLimits(comptroller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAddresses(comptroller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPercentLock(
      pulp: string,
      account: string,
      weekInt: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getRewardSpeeds(comptroller: string, auToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWeekToUnlock(
      pulp: string,
      account: string,
      targetUnlockPercent: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
