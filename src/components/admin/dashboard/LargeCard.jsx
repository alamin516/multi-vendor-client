import LayersIcon from '@mui/icons-material/Layers';

function LargeCard({data}) {
  return (
    <div className={`${data.bg_color} p-4 flex flex-col items-center rounded-lg space-y-2`}>
        <LayersIcon className='lg:w-10 lg:h-10'/>
        <h2>{data.title}</h2>
        <h2 className='text-2xl font-semibold'>{'৳'} {data.sales}</h2>
    </div>
  )
}

export default LargeCard