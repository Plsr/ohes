import styled from 'styled-components'
import DateTimeWidget from './DateTimeWidget'
import ActiveTaskBarApp from './ActiveTaskBarApp'
import { OsApplication } from '../hooks/useApplicationManager'
import { useApplicationManager } from '../hooks/useApplicationManager'

const TaskBar = () => {
  const { appConfigs, maximizeApp } = useApplicationManager()

  const handleAppClick = (candidateApp: OsApplication) => {
    maximizeApp(candidateApp.name)
  }

  return (
    <TaskBarWrapper>
      <StartButton>
        <span>Start</span>
      </StartButton>
      <ActiveAppsWrapper>
        {Object.values(appConfigs).map((app) => (
          <StyledActiveTaksBarApp
            key={app.id}
            name={app.name}
            onAppClick={() => handleAppClick(app)}
          />
        ))}
      </ActiveAppsWrapper>
      <StyledDateTimeWidget />
    </TaskBarWrapper>
  )
}

const StyledActiveTaksBarApp = styled(ActiveTaskBarApp)`
  flex-basis: 150px;
`

const StartButton = styled.div`
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  background-color: #616ae8;
  cursor: pointer;
`

const ActiveAppsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  background-color: #edfbfc;
  color: #333;
  padding: 5px 10px;
`

const StyledDateTimeWidget = styled(DateTimeWidget)`
  flex-shrink: 0;
  font-size: 0.8rem;
  color: #131d3d;
  background-color: #cae1e3;
`

const TaskBarWrapper = styled.div`
  height: 50px;
  background-color: #333;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  cursor: pointer;
`

export default TaskBar
