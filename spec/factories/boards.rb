# == Schema Information
#
# Table name: boards
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_state :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :board do
    name 'test board'
    description 'testing board 123'
    default_state {{
        'panel_1' => {
          'id' => '1',
          'name' => 'panel_1',
        },
        'panel_2' => {
          'id' => '2',
          'name' => 'panel_2',
        }
      }}
  end

end
