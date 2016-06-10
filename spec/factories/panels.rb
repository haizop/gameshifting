# == Schema Information
#
# Table name: panels
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_setup :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :panel do
    name 'test panel'
    description 'testing panel 123'
    default_setup {{
        'dynamic_1' => {
          'id' => '1',
          'name' => 'dynamic_1',
          'state' => 'active'
        },
        'dynamic_2' => {
          'id' => '2',
          'name' => 'dynamic_2',
          'state' => 'inactive'
        }
      }}
  end

end
