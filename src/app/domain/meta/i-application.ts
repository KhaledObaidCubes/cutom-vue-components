import { TApplication as TApp } from 'cubes-ui'
import { type TConfig as TDashboardConfig } from 'cubes-dashboard'
interface TWindowsConfig {
  configVars: {
    personName: string
    occupation: string
    account: number
  }
}

type TConfig = TDashboardConfig & TWindowsConfig

type TApplication = TApp<TConfig>

export type { TApplication, TConfig }
