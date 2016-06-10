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
    
  end

end
