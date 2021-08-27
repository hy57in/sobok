import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import { useStoreDetailQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreContext, StoreLayout } from '.'

const description = ''

export default function StoreInfoPage() {
  const storeContext = useContext(StoreContext)
  const storeId = storeContext.id
  const storeName = storeContext.name

  const { data, loading, error } = useStoreDetailQuery({ skip: !storeId, variables: { storeId } })
  const storeDetail = data?.store

  return (
    <PageHead title={`${storeName} 정보 - 소복`} description={description}>
      <div>매장 정보 페이지</div>
      {loading || !storeDetail ? (
        'loading...'
      ) : (
        <>
          <div>{storeDetail.tel}</div>
          <div>{storeDetail.address}</div>
          <div>
            {storeDetail.businessHours?.map((businessHour, i) => (
              <p key={i}>{businessHour}</p>
            ))}
          </div>
          <div>{storeDetail.holidays}</div>
          <div>{storeDetail.categories}</div>
          <div>{storeDetail.hashtags}</div>
        </>
      )}
    </PageHead>
  )
}

StoreInfoPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
