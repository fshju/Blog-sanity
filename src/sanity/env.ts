export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-13'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk7YAjSGJHZcV6OrHzf2NVwkbMx0Dx5X370da3mGBIer6OyzgISJC2yXHh3CRyucrQgGzQuho4apo1DVdiqdTiOZt903uXwmVwa10zR2E5fc9uOKGBuHJ30GkMtCJ1vNG7zMZb1Z0TAqFXIbsvrutskHO6fkgkasKCdcUi6BJZS6cbeuSUZw",
  'Missing environment variable: SANITY_API_READ_TOKEN'
  
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
