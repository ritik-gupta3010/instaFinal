import EditPost from "./EditPost";
import {shallow,configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("EditPost",()=>{
    it("should render properly",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const onClose = jest.fn();

        const wrapper=shallow(<EditPost post={post} open={true} />);
        const tree=wrapper.debug();
        expect(wrapper).toMatchSnapshot();
    })
})