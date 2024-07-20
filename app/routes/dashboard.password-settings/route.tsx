import PasswordUpdate from '~/components/dashboard/PasswordUpdate'

const DaashboardPasswordSettings = () => {
  return (
    <>
        <div className="h-16  grid place-items-center font-extrabold">Nav</div>
        <div className="flex">
            <div className="w-[20%] h-svh bg-[rgba(203,213,225,.3)] grid place-items-center font-extrabold max-lg:hidden">Sidebar</div>
            <PasswordUpdate />
      </div>
    </>
  )
}

export default DaashboardPasswordSettings