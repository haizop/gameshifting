# == Schema Information
#
# Table name: canvasses
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  user_id     :integer
#  default_set :json
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :canvass do

  end

end
