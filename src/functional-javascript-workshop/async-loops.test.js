import subject from './async-loops'

describe('async loops', () => {
  let load = (id, cb) => {
    let users = {
      10: {
        id: 10,
        fname: 'test_first10',
        lname: 'test_last10'
      },
      20: {
        id: 20,
        fname: 'test_first20',
        lname: 'test_last20'
      },
      30: {
        id: 30,
        fname: 'test_first30',
        lname: 'test_last30'
      },
      40: {
        id: 40,
        fname: 'test_first40',
        lname: 'test_last40'
      },
      50: {
        id: 50,
        fname: 'test_first50',
        lname: 'test_last50'
      }
    }
    cb(users[id])
  }
  it('loads users array correctly', () => {
    let idArr = [10, 20, 30, 40, 50]

    subject(idArr, load, (usersArr) => {
      expect(usersArr).toHaveLength(5)
      usersArr.forEach((user) => {
        expect(idArr).toContain(user.id)
      })
    })
  })
})
