// import {
//     QueryClient,
//                 QueryClientProvider,
//                                       useQuery,
//   } from '@tanstack/react-query'

  
//   const queryClient = new QueryClient()
  
//   export default function App() {
//     return (
//       <QueryClientProvider client={queryClient}>
//         <Example />
//       </QueryClientProvider>
//     )
//   }
  
//   function Example() {
//     const { isLoading, error, data } = useQuery({
//       queryKey: ['repoData'],
//       queryFn: () =>
//         fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
//           res.json(),
//         ),
//     })

    
  
//     if (isLoading) return 'Loading...'
  
//     if (error) return 'An error has occurred: ' + error.message
  
//     return (
//       <div>
//         <h1>{data.title}</h1>
    
//       </div>
//     )
//   }