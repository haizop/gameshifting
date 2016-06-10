# == Schema Information
#
# Table name: dynamics
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :dynamic do
    name "test dynamic"
    description "testing 123"
  end

end
