# == Schema Information
#
# Table name: boards
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_setup :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :board do
    name 'test board'
    description 'testing board 123'
    default_setup "{\"panels\":[{\"id\":1,\"placement\":{\"row\":1,\"order\":1},\"name\":\"Body\",\"description\":\"body position\",\"dynamics\":[{\"id\":1,\"order\":3,\"name\":\"sitting\",\"description\":\"on the ground\"},{\"id\":2,\"order\":1,\"name\":\"standing\",\"description\":\"on your feet\"},{\"id\":3,\"order\":2,\"name\":\"dancing\",\"description\":\"across the room\"}]},{\"id\":2,\"placement\":{\"row\":1,\"order\":2},\"name\":\"Speaking\",\"description\":\"how we manage who speaks now\",\"dynamics\":[{\"id\":1,\"order\":3,\"name\":\"circle\",\"description\":\"one at a time\"},{\"id\":2,\"order\":2,\"name\":\"jump-in\",\"description\":\"joyful chaos\"},{\"id\":3,\"order\":1,\"name\":\"stack\",\"description\":\"stack keeper makes list\"}]}]}"
  end

end
