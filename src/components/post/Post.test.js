import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from "./Post"

configure({ adapter: new Adapter() });

describe("post",()=>{
    it("should render correctly",()=>{
        const data={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper = shallow(<Post post={data}/>);
        const tree=wrapper.debug();//degug give the compononet code rather than object
        expect(tree).toMatchSnapshot();
    });
})