import { useEffect } from 'react'


const photo = 'data:image/jpeg;base64,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';

const Content = () => {

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (e) {
      console.log(e);
    }
  }
  run();

  return (
    <>
      <div className='row mx-4 mt-3'>
        <div className='col-lg-8'>
          <div className='row'>
            <div style={{fontFamily:'serif'}} className='h3'>Editor's Picks</div>
          </div>
          <div className='border-lg-end'>
            <div className='row m-2'>
              <div className='col'>
                <img src={photo} alt='photo1'/>
              </div>
              <div className='col'>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla sit amet eros euismod fringilla. Sed eu eros quis massa vehicula tristique a eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in nisl congue, convallis augue nec, sollicitudin lacus</div>
              </div>
            </div>
            <div className='row m-2'>
              <div className='col'>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla sit amet eros euismod fringilla. Sed eu eros quis massa vehicula tristique a eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in nisl congue, convallis augue nec, sollicitudin lacus</div>
              </div>
              <div className='col'>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla sit amet eros euismod fringilla. Sed eu eros quis massa vehicula tristique a eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in nisl congue, convallis augue nec, sollicitudin lacus</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div>
            <div style={{fontFamily:'serif'}} className='h3'>Most Popular</div>
          </div>
          <div className='row'>
            <div className='col'>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla sit amet eros euismod fringilla. Sed eu eros quis massa vehicula tristique a eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in nisl congue, convallis augue nec, sollicitudin lacus</div>
            </div>
            <div className='col'>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla sit amet eros euismod fringilla. Sed eu eros quis massa vehicula tristique a eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in nisl congue, convallis augue nec, sollicitudin lacus</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content