# == Schema Information
#
# Table name: games
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :game do
    name "test game"
    description "I am a game"
  end

end
