import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// useCdn true means that sanity will cache the content for 60s and then revalidate the content after every 60s.
// if true it gets the data every refresh or live
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
