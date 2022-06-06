export interface V2SdkConfigProps {
  factoryAddress: string
  initCodeHash: string
}

export class V2SdkConfig {
  factoryAddress: string | undefined
  initCodeHash: string | undefined

  updateConfig({ factoryAddress, initCodeHash }: V2SdkConfigProps) {
    this.factoryAddress = factoryAddress
    this.initCodeHash = initCodeHash
  }
}
