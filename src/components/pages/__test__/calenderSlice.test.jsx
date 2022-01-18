import calanderReducer, {
  initializeCalendarStatus,
  setStatusNotAvailableToAvailableOnNextDay,
} from '../calendar/calendarSlice';

describe('calender reducer', () => {
  const initialState = {
    dayStatus: [],
    calStatus: 'idle',
  };

  const availabeState = {
    dayStatus: [
      { day: 0, status: 0 },
      { day: 1, status: 0 },
    ],
    calStatus: 'idle',
  };

  it('should handle initial state', () => {
    const actual = calanderReducer(
      initialState,
      initializeCalendarStatus({ userSelectedDay: 10, maxDays: 30 })
    );
    expect(actual.dayStatus.length).toEqual(30);
  });

  it('should handle initial state status min', () => {
    const actual = calanderReducer(
      initialState,
      initializeCalendarStatus({ userSelectedDay: 10, maxDays: 30 })
    );
    expect(actual.dayStatus[10].status).toEqual(0);
  });

  it('should handle initial state status max', () => {
    const actual = calanderReducer(
      initialState,
      initializeCalendarStatus({ userSelectedDay: 10, maxDays: 30 })
    );
    expect(actual.dayStatus[1].status).toEqual(1);
  });

  it('should handle setStatusNotAvailableToAvailableOnNextDay state ', () => {
    const nextDay = calanderReducer(availabeState, setStatusNotAvailableToAvailableOnNextDay(1));
    expect(nextDay.dayStatus[1].status).toEqual(1);
  });
});
