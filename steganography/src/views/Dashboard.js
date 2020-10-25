import React from 'react';
import steg from '../steganography'

class Dashboard extends React.Component {
  state = {
    dataImageURI: '',
    DecodedSecret: ''
  };

  readURL(input_file) {
    console.log(input_file)
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        dataImageURI: e.target.result,
      });
      document.querySelector('#rawcodeimg').src = e.target.result;
    }
    reader.readAsDataURL(input_file[0])
  }

  encodeTextIntoImage() {
    if(this.state.dataImageURI) {
      console.log("HIDING", this.state.dataImageURI)
      document.querySelector('#encodeimg').src = steg.encode(document.querySelector('#secret').value, this.state.dataImageURI);
    }
  }

  decodeImage(input_file) {
    console.log("DECODING NOW")
    let reader = new FileReader();
    reader.onload = e => {
      console.log(e.target.result)
      try {
        this.setState({
          DecodedSecret: steg.decode(e.target.result)
        });
      } catch (e) {
        // give notifaction that image contains no readable secret
      }
      
      console.log(steg.decode(e.target.result));
      // conditional render when state is set of result
      document.querySelector('#decodedsecret').innerText = steg.decode(e.target.result)
    }
    reader.readAsDataURL(input_file[0])
  }

  render() {
    return (
      <div className='dashboard'>
        <div className="sm:col-span-6">
          <label
            htmlFor="cover_photo"
            className="block text-sm leading-5 font-medium text-gray-700"
          >
            Cover photo
          </label>
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mt-1 text-sm text-gray-600">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  Upload a file
                </button>
                or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>


        <div className="">Source Image:</div>
        <input type="file" name="img" id="" accept="image/*" onChange={ (e) => this.readURL(e.target.files) }></input>
        <img src="" alt="" id="rawcodeimg"/>

        <input type="text" className="secret" id="secret"/>
        <button onClick={() => this.encodeTextIntoImage()}>Hide Message Into Image</button>

        <img src="" alt="" id="encodeimg"/>

        <div className="">Decode Image:</div>
        <input type="file" name="img" id="" accept="image/*" onChange={ (e) => this.decodeImage(e.target.files) }></input>
        <h2 id="decodedsecret"></h2>

      </div>
    );
  }
}


export default Dashboard;