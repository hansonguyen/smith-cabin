// Actions
import { getEvents } from '@/src/actions/actions'
import NewEvent from './NewEvent'

async function CalendarPage() {
  const events = await getEvents()
  return <NewEvent events={events} />
}

export default CalendarPage
