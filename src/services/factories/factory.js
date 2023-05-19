function getStatusWorker (response) {
  const { workEntryIn, workEntryOut } = response.data.data[0]
  const { firstName, lastName, id, workStatus } = response.data.data[0].employee

  return {
    workEntryIn,
    workEntryOut,
    employee: {
      firstName,
      lastName,
      id,
      workStatus
    }
  }
}

export { getStatusWorker }
