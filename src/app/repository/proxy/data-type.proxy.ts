import { DataType } from '@/app/domain/def/data-type'
import { IDataType } from '@/app/domain/meta/i-data-type'
import { mockPromise_200, uid } from 'cubes'
import { Pagination, TEndPoint, TResult, clientFactory } from 'cubes-ui'

const { baseURL, api } = window['configure']().network['shared']
const config = { baseURL: `${baseURL}${api}` }
const pagenationInfo = new Pagination({ totalCount: 10 })
const DB = ([] as IDataType[]).prefillRandNums(pagenationInfo.totalCount).map((_x, i) => {
  let _id = uid()
  return new DataType({ id: _id, name: { ar: `نوع${i}`, en: `type${i}` } })
})
const server = {
  list: (query: any) => {
    // query.query.offset == Math.floor(pagenationInfo.totalCount / query.query.limit) ? (pagenationInfo.isLastPage = true) : (pagenationInfo.isLastPage = false)
    return mockPromise_200(1000, {
      data: DB,
      pagenation: pagenationInfo
    })
  },
  post: (payload: IDataType) => {
    return new Promise<TResult<DataType>>((res, _rej) => {
      try {
        console.log(payload)
        const newItem = new DataType(payload)
        DB.push(newItem)

        res({ data: DB })
      } catch (err) {
        console.log(err)
      }
    })
  },
  update: (payload: IDataType) => {
    return new Promise<TResult<DataType>>((res, _rej) => {
      const newItem = new DataType({ ...payload })
      const idx = DB.findIndex(item => item.id === newItem.id)
      try {
        if (idx != -1) {
          DB.splice(idx, 1, newItem)
          res({ data: DB })
        } else {
          _rej(`ITEM ${newItem.id} DON'T EXIST`)
        }
      } catch (err) {
        console.log(err)
      }
    })
  },
  delete: (id: string) => {
    return new Promise<TResult<DataType>>((res, _rej) => {
      const idx = DB.findIndex(item => item.id === id)
      try {
        if (idx != -1) {
          DB.splice(idx, 1)
          res({ data: DB })
        } else {
          _rej(`ITEM ${id} DOES NOT EXIST`)
        }
      } catch (err) {
        console.log(err)
      }
    })
  }
}

const dataType = () =>
  clientFactory(
    true,
    DataType,
    config,
    {
      list: { verb: 'get', template: '/apiName/' } as TEndPoint,
      post: { verb: 'post', template: '/apiName/{1}' } as TEndPoint,
      update: { verb: 'put', template: '/apiName/{1}' } as TEndPoint,
      delete: { verb: 'delete', template: '/apiName/{1}' } as TEndPoint
    },
    undefined,
    undefined,
    false,
    true,
    server
  )
const clientMap = { dataType }
type TDataTypeClient = typeof clientMap
export { dataType }
export type { TDataTypeClient }
