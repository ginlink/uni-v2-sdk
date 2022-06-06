import { v2SdkConfig } from './constants'

v2SdkConfig.updateConfig({
  factoryAddress: '0xF72Ad9009e81181E342153b20e8afe8aD21DA3e7',
  initCodeHash: '0x84a902c06264b6d04c9b7841473fa6e0634300f5331c41061f26ab4ce126de78'
})

const INIT_CODE_HASH = v2SdkConfig.initCodeHash

import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
