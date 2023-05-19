
import { workerOnlineResponse } from "@/__mocks__/workStatus";

import { getStatusWorker } from "../factory";

describe('GetStatusWorker', () => {
  it('should return the correct data',() => {
  
    const response = getStatusWorker(workerOnlineResponse)
    
    expect(response).toEqual({
         employee: {
           firstName: "Sesame",
           id: "b99a6cd9-3a3d-4635-9eea-e089c90ac45a",
           lastName: "HR",
           workStatus: "online",
         },
         workEntryIn: {
           coordinates: {
             latitude: null,
             longitude: null,
           },
           date: "2022-05-08T13:39:46+02:00",
           origin: "api",
         },
         workEntryOut: {
           coordinates: {
             latitude: null,
             longitude: null,
           },
           date: "2022-05-08T13:39:54+02:00",
           origin: "api",
         },
       })
  })
})
